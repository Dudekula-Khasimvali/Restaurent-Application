import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import './NonVeg.css'
import { useCart } from './CartContext'; // Import useCart hook
import Fotter from "./Fotter";

function NonVeg() {
  const [productArray, setProductArray] = useState([]);
  const { dispatch } = useCart(); // Get dispatch from context

  useEffect(() => {
    // Fetch product data from API
    getProductData();
}, []);

// Function to fetch product data from API
const getProductData = () => {
    let url = "http://localhost:3600/api/getCatogiry/nonveg"; // Adjust API endpoint for vegetarian products
    axios.get(url)
        .then((response) => {
            // Set the filtered products to state
            setProductArray(response.data);
        })
        .catch((error) => {
            console.error("Error fetching product data:", error);
        });
};

// Function to render star ratings
const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i}>&#9733;</span>); // Full star
        } else {
            stars.push(<span key={i}>&#9734;</span>); // Empty star
        }
    }
    return stars;
};

const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
};

return (
    <div className="container-fluid" style={{marginTop:'-5px' }}>
        <Navbar/>
        <div className="row">
            <div className="col">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{marginLeft:'-2%' , marginRight:'-5%'}}>
                    <div className="carousel-inner" >
                        <div className="carousel-item active" data-bs-interval="10000">
                        <img
                            src="https://i.pinimg.com/736x/ed/dd/2c/eddd2cff2e4a654360465b1b13261a5c.jpg"
                            className="d-block w-100"
                            height="500"
                            alt="image"
                          />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img
                            src="https://i.pinimg.com/originals/c3/58/26/c35826954df29c1855db6cbc4807ffff.jpg"
                            className="d-block w-100"
                            height="500"
                            alt="image"
                          />
                        </div>
                        <div className="carousel-item">
                        <img
                            src="https://img-global.cpcdn.com/recipes/c6ab1c63858c24b3/1200x630cq70/photo.jpg"
                            className="d-block w-100"
                            height="500"
                            alt="image"
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
        <div className="row" style={{marginLeft:'-20px' , marginRight:'10px'}}>
            {productArray.map((product, index) => (
                <div className="col-md-2" key={index}>
                    <div className="productCardDrinks" style={{marginTop:"-7%" , marginLeft:'-8%' , marginRight:"0%" , marginBottom:'11%' }}>
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
                                                Rating :   {renderStars(product.rating)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button onClick={() => addToCart(product)} className="btn btn-outline-info" > <b >ADD TO CART</b></button>
                        </div>
                        {/* Popup content */}
                        <div className="popup">
                            <div className="popupContent">
                                {/* Add your popup content here */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div><br/>
        <Fotter/>
    </div>
    
    </div>

);
}

export default NonVeg;