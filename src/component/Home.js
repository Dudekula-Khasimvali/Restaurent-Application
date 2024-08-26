import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Home.css';  // Ensure this CSS includes the styles mentioned above
import Navbar from "./Navbar";
import DiscountCalculator from "./DiscountCalculator";
import Fotter from "./Fotter";

function Home() {
    const [productArray, setProductArray] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProductData(); // Fetch product data on component mount
    }, []);

    function getProductData() {
        let url = "http://localhost:3600/api/get";
        axios.get(url)
            .then((res) => {
                setProductArray(res.data);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
            });
    }

    function renderStars(rating) {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} style={{ color: "yellow" }}>&#9733;</span>);
            } else {
                stars.push(<span key={i}>&#9734;</span>);
            }
        }
        return stars;
    }

    const goToDetails = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row">
                <div className="col">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <Link to="/seafood">
                                    <img src="./images/fishfry.webp" className="d-block w-100" alt="Seafood" />
                                </Link>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <Link to="/veg">
                                    <img src="./images/fb.jpg" className="d-block w-100" alt="Vegetarian Dishes" />
                                </Link>
                            </div>
                            <div className="carousel-item">
                                <Link to="/nonveg">
                                    <img src="./images/biryani.webp" className="d-block w-100" alt="Non-Vegetarian Dishes" />
                                </Link>
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

                    <div className="row">
                        {productArray.map((product, index) => (
                            <div className="col-md-2" key={index}>
                                <div className="productCardDrinks">
                                    <div className="productContentDrinks">
                                        <div className="productImageDrinks">
                                            <img 
                                                src={`data:image/jpeg;base64,${product.image}`}
                                                alt={product.proName}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="productDetailsDrinks">
                                            <div className="productName">{product.proName}</div>
                                            <div className="priceAndRating">
                                                <div className="productPriceDrinks">
                                                    <div className="priceDetails">
                                                        <div className="priceRow">
                                                            <DiscountCalculator category={product.catogiry} price={product.proPrice} />
                                                            <span className="originalPriceDrinks">₹ {product.proPrice.toFixed(2)}</span>
                                                        </div>
                                                        <div className="productRatingsDrinks">
                                                            Rating: {renderStars(product.rating)}
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
                            </div>
                        ))}
                    </div>
                    <Fotter />
                </div>
            </div>
        </div>
    );
}

export default Home;
