import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  const [productArray, setProductArray] = useState([]);
  const [proName, setProName] = useState("");
  const [catogiry, setCatogiry] = useState("");
  const [proPrice, setProPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(""); // Added image state
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchProductData();
  }, []);

  function fetchProductData() {
    axios.get("http://localhost:3600/api/get")
      .then((res) => {
        setProductArray(res.data);
      });
  }

  function addProduct() {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('proName', proName);
    formData.append('catogiry', catogiry);
    formData.append('proPrice', proPrice);
    formData.append('rating', rating);

    axios.post("http://localhost:3600/api/create", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(() => {
      alert("New product added successfully!");
      clearFields();
      fetchProductData();
    });
  }

  function deleteProduct(id) {
    axios.delete(`http://localhost:3600/api/delete/${id}`)
      .then(() => {
        alert("Product deleted successfully!");
        fetchProductData();
      });
  }

  function selectProduct(id) {
    const selectedProduct = productArray.find(product => product.id === id);
    if (selectedProduct) {
      setProName(selectedProduct.proName);
      setCatogiry(selectedProduct.catogiry);
      setProPrice(selectedProduct.proPrice);
      setRating(selectedProduct.rating);
      setSelectedProductId(id);
      setEditMode(true);
    }
  }

  function updateProduct() {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('proName', proName);
    formData.append('catogiry', catogiry);
    formData.append('proPrice', proPrice);
    formData.append('rating', rating);

    axios.put(`http://localhost:3600/api/update/${selectedProductId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(() => {
      alert("Product updated successfully!");
      clearFields();
      setEditMode(false);
      setSelectedProductId(null);
      fetchProductData();
    });
  }

  function clearFields() {
    setProName("");
    setCatogiry("");
    setProPrice("");
    setRating("");
    setImage("");
  }

  const productRows = productArray.map((product, index) =>
    <tr key={index}>
      <td>{product.id}</td>
      <td>{product.proName}</td>
      <td>{product.catogiry}</td>
      <td>{product.proPrice}</td>
      <td>{product.rating}</td>
      <td>
        <button className="btn btn-primary" onClick={() => selectProduct(product.id)}>Select</button> |
        <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
      </td>
    </tr>
  );

  return (
    <div  >
      {/* Form for adding and updating product */}
      <Navbar/>
      <div className="row" >
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center mb-4">Product Management</h3>
          <form>
            <div className="form-group">
              <label htmlFor="proName">Product Name</label>
              <input type="text" className="form-control" id="proName" value={proName} onChange={(e) => setProName(e.target.value)} placeholder="Product Name" />
            </div>
            <div className="form-group">
              <label htmlFor="catogiry">Category</label>
              <input type="text" className="form-control" id="catogiry" value={catogiry} onChange={(e) => setCatogiry(e.target.value)} placeholder="Category" />
            </div>
            <div className="form-group">
              <label htmlFor="proPrice">Price</label>
              <input type="text" className="form-control" id="proPrice" value={proPrice} onChange={(e) => setProPrice(e.target.value)} placeholder="Price" />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input type="text" className="form-control" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input type="file" className="form-control-file" id="image" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
            </div>
            {editMode ? <button type="button" className="btn btn-success" onClick={updateProduct}>Update Product</button> : <button type="button" className="btn btn-info" onClick={addProduct}>Add Product</button>}
          </form>
        </div>
      </div>
      {/* Table for displaying product list */}
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <h3 className="text-center mb-4">Product List</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;