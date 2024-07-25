// Drinks.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Drinks.css'; // Import the CSS file for Drinks component styling
import Navbar from "./Navbar";
import { useCart } from './CartContext'; // Import useCart hook
import Fotter from "./Fotter";


function Drinks() {
    const [productArray, setProductArray] = useState([]);
    const { dispatch } = useCart(); // Get dispatch from context


    useEffect(() => {
        // Fetch product data from API
        getProductData();
    }, []);

    // Function to fetch product data from API
    const getProductData = () => {
        let url = "http://localhost:3600/api/getCatogiry/drink"; // Adjust API endpoint for drinks category
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
        <div className="container-fluid" style={{marginTop:'-5px'}}>
            <Navbar/>
            <div className="row">
                <div className="col">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{marginLeft:'-2%' , marginRight:'-5%'}}>
                        <div className="carousel-inner" style={{borderRadius:"10px"}}>
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://img.delicious.com.au/qGTYB0I9/w1200/del/2020/02/watermelon-and-gin-slushies-126036-2.jpg" className="d-block w-100" height="500" alt="image"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://www.farmerboys.com/images/menu/fountain-drinks.jpg" className="d-block w-100" height="500" alt="image"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.spoton.com/blog/content/images/size/w1200/2023/08/Mocktail--zero-proof-cocktails--and-different-non-alcoholic-drinks.jpeg" className="d-block w-100" height="500" alt="image"/>
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
            <div className="row" style={{marginLeft:'-30px' , marginRight:'300px'}}>
                {productArray.map((product, index) => (
                    <div className="col-md-2" key={index}>
                        <div className="productCardDrinks" style={{marginTop:"-6%" , marginLeft:'-1%' , marginRight:"-5%" }}>
                           <div className="productContentDrinks">
                                <div className="productImageDrinks" >
                                    <img 
                                        src={`data:image/jpeg;base64,${product.image}`}
                                        height={100}
                                        width={100}
                                        alt={product.proName}
                                    />
                                </div>
                                <div className="productDetailsDrinks">
                                    <div className="productNameDrinks" style={{textAlign:"center" , textDecoration:"italic"}}><b>{product.proName}</b></div>
                                    <div className="priceAndRatingDrinks">
                                        <div className="productPriceDrinks">
                                            <div className="priceDetailsDrinks">
                                                <div className="priceRowDrinks" style={{textAlign:"center" , fontWeight:"bold"}}>
                                                    <span className="discountedPriceDrinks">
                                                        ₹ {(product.proPrice * 0.88).toFixed(2)}
                                                    </span>
                                                    <span className="discountDrinks">
                                                        <sup style={{ color: 'red' }}>(5% off)</sup>
                                                    </span>
                                                    <span className="originalPriceDrinks">
                                                        ₹ {product.proPrice.toFixed(2)}
                                                    </span>
                                                </div>
                                                <div className="productRatingsDrinks" style={{textAlign:"center" , fontWeight:"bold"}}>
                                                    Rating :   {renderStars(product.rating)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => addToCart(product)} className="btn btn-outline-info" > <b>ADD TO CART</b></button>
                            {/* Popup content */}
                            <div className="popupDrinks">
                                <div className="popupContentDrinks">
                                    {/* Add your popup content here */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Fotter/>
        </div>
       
        </div>

    );
}
 
export default Drinks;
