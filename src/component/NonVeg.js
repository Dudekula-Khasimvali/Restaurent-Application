import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import './NonVeg.css';
import { useCart } from './CartContext';
import Fotter from "./Fotter";
import { useNavigate } from "react-router-dom";

function NonVeg() {
  const [productArray, setProductArray] = useState([]);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    let url = "http://localhost:3600/api/getCatogiry/nonveg";
    axios.get(url)
      .then((response) => {
        setProductArray(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i}>{i <= rating ? "★" : "☆"}</span>);
    }
    return stars;
  };

  const goToDetails = (productId) => {
    navigate(`/product/${productId}`);
};

  return (
    <div>
      <Navbar />
      <div className="carousel-container">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="./images/c35826954df29c1855db6cbc4807ffff.jpg"
                className="d-block w-100 carousel-image"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="./images/eddd2cff2e4a654360465b1b13261a5c.jpg"
                className="d-block w-100 carousel-image"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/photo.jpg"
                className="d-block w-100 carousel-image"
                alt="Slide 3"
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row product-row">
        {productArray.map((product, index) => (
          <div className="col-md-2" key={index}>
            <div className="productCardDrinks">
              <div className="productContentDrinks">
                <div className="productImageDrinks">
                  <img
                    src={`data:image/jpeg;base64,${product.image}`}
                    height={100}
                    width={100}
                    alt={product.proName}
                  />
                </div>
                <div className="productDetails">
                  <div className="productName">{product.proName}</div>
                  <div className="priceAndRating">
                    <div className="productPrice">
                      <div className="priceDetails">
                        <div className="priceRow">
                          <span className="discountedPrice">
                            ₹ {(product.proPrice * 0.88).toFixed(2)}
                          </span>
                          <span className="discount">
                            <sup style={{ color: 'red' }}>(12% off)</sup>
                          </span>
                          <span className="originalPrice">
                            ₹ {product.proPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className="productRatings">
                          Rating : {renderStars(product.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{textAlign:'center'}}>
                                      <button className="btn btn-outline-info" onClick={() => goToDetails(product.id)}>
                                      <b>DETAILS</b></button>
                                      </div>
            </div>
          </div>
        ))}
      </div>
      <Fotter />
    </div>
  );
}
export default NonVeg;