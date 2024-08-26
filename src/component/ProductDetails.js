import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Fotter from './Fotter';
import './details.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 0,
    proName: "",
    proPrice: 0,
    image: "",
    description: "",
    specifications: [],
    reviews: [],
  });
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    } else {
      console.error("Product ID is not present in the URL");
      toast.error('Invalid product ID. Please try again.', { position: "top-center" });
      navigate("/");
    }
  }, [id]);

  const fetchProductDetails = (productId) => {
    const url = `http://localhost:3600/api/getById/${productId}`;
    axios.get(url)
      .then((response) => {
        if (response.data) {
          setProduct({
            id: response.data.id || 0,
            proName: response.data.proName || "Unknown Product",
            proPrice: response.data.proPrice || 0,
            image: response.data.image || "",
            description: response.data.description || "",
            specifications: response.data.specifications || [],
            reviews: response.data.reviews || [],
          });
        } else {
          console.error("Product data is empty or undefined");
          toast.error('Product details are unavailable. Please try again later.', { position: "top-center" });
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        toast.error('Failed to fetch product details. Please try again later.', { position: "top-center" });
      });
  };

  const addToCart = () => {
    const userId = sessionStorage.getItem("USER_ID");
    if (!userId) {
      toast.error("Please login before adding items to the cart.", { position: "top-center" });
      navigate("/login");
      return;
    }

    const cartItem = {
      image: product.image || "",
      proName: product.proName || "Unknown Product",
      proPrice: product.proPrice || 0,
      proQuantity: qty || 1,
      student: {
        id: userId
      }
    };

    console.log("Adding to cart:", cartItem); // Debugging line

    axios.post("http://localhost:3500/api/cart/create", cartItem)
      .then((response) => {
        toast.success("Product added to cart", { position: "top-center" });
        navigate("/cart");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
        toast.error('Failed to add product to cart. Please try again.', { position: "top-center" });
      });
  };

  const handleQuantityChange = (value) => {
    setQty(value);
    // Update total price based on quantity
    const totalPrice = product.proPrice * value;
    // Update the UI element displaying the total price
    // ...
  };

  return (
    <section style={{ padding: '20px', marginTop: '50px'  }}>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Side: Product Image */}
        <figure style={{ flex: '1', textAlign: 'left' }}>
          <img 
            src={product.image ? `data:image/jpeg;base64,${product.image}` : 'default-image.png'}
            alt={product.proName || 'Product Image'}
            style={{ width: '300px', height: '300px', objectFit: 'cover'}}
          />
          {/* Add a figcaption for image description */}
          {/* <figcaption>{product.proName || 'Product Name'}</figcaption> */}
        </figure>
        {/* Right Side: Product Details */}
        <article style={{ flex: '1', textAlign: 'left', paddingLeft: '20px' }}>
          <h1>{product.proName || 'Product Name'}</h1>
          <p style={{ fontSize: '1.5em', color: 'green' }}>₹ {product.proPrice.toFixed(2) || '0.00'}</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '20px' }}>
            <b>Quantity: </b>
            <button onClick={() => handleQuantityChange(qty - 1)} disabled={qty <= 1} style={{ margin: '0 10px' }}>-</button>
            {qty}
            <button onClick={() => handleQuantityChange(qty + 1)} style={{ margin: '0 10px' }}>+</button>
          </div>
          <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
            <b>Total Amount:</b> ₹ {(product.proPrice * qty).toFixed(2) || '0.00'}
          </p>
          <button
            onClick={addToCart}
            style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
          >
            Add To Cart
          </button>
          <button
          
            onClick={() => navigate('/order')} // Redirect to checkout page
            style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginLeft: '10px' }}
          >
            Proceed to Order
          </button>
        
          <div>
            {/* Display product reviews */}
            {/* <h2>Reviews</h2>
            {product.reviews.length > 0 ? (
              <ul>
                {product.reviews.map((review, index) => (
                  <li key={index}>
                    <p>{review.text}</p>
                    <p>Rating: {review.rating}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews available yet.</p>
            )} */}
          </div>
        </article>
      </div>
      <Fotter />
    </section>
  );
}

export default ProductDetails;