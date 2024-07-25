import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Home.css';
import Navbar from "./Navbar";
import DiscountCalculator from "./DiscountCalculator";
import { useCart } from './CartContext'; // Import useCart hook
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import Fotter from "./Fotter";

function Home() {
    const [productArray, setProductArray] = useState([]);
    const { dispatch } = useCart(); // Get dispatch from context
    const navigate = useNavigate();

    useEffect(() => {
        getProductData();
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

    const addToCart = (product) => {
        // Check if user is logged in
        const isLoggedIn = true; // Example: Set to true if user is logged in

        if (!isLoggedIn) {
            // Redirect to login page if user is not logged in
            navigate("/login");
        } else {
            // If user is logged in, add product to cart
            axios.post("http://localhost:3500/api/cart", { product })
                .then(() => {
                    console.log("Product added to cart");
                    // You can also dispatch action to update context here if needed
                    dispatch({ type: 'ADD_TO_CART', product });
                    navigate("/cart");
                })
                .catch((error) => {
                    console.error("Error adding product to cart:", error);
                    // Show toast error
                    toast.error("Error adding product to cart");
                });
        }
    };

    return (
        <div className="container-fluid" style={{marginTop:'50px'}}>
            <Navbar />
            <div className="row">
                <div className="col">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{marginLeft:'-2%' , marginRight:'-5%' ,marginTop:'-3.9%'}}>
                        <div className="carousel-inner" style={{ borderRadius: "10px" }}>
                            <div className="carousel-item active" data-bs-interval="10000">
                                <Link to="/seafood">
                                    <img src="./images/fishfry.webp" className="d-block w-100" height="500" alt="image" loading="lazy" />
                                </Link>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <Link to="/veg">
                                    <img src="./images/fb.jpg" className="d-block w-100" height="500" alt="image" loading="lazy" />
                                </Link>
                            </div>
                            <div className="carousel-item">
                                <Link to="/nonveg">
                                    <img src="./images/biryani.webp" className="d-block w-100" height="500" alt="image" loading="lazy" />
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
                    <div className="row" style={{ marginLeft: '-25px', marginRight: '-20px' }}>
                        {productArray.map((product, index) => (
                            <div className="col-md-2" key={index}>
                                <div className="productCardDrinks" style={{marginTop:"-6%" , marginLeft:'-1%' , marginRight:"-5%" }}>
                                    <div className="productContentDrinks">
                                        <div className="productImageDrinks">
                                            <img 
                                                src={`data:image/jpeg;base64,${product.image}`}
                                                height={100}
                                                width={100}
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
                                        <button className="btn btn-outline-info" onClick={() => addToCart(product)}>
                                            <b>ADD TO CART</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Fotter/>
                </div>
            </div>
        </div>
    );
}

export default Home;