import React, { useState } from 'react';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fotter from './Fotter';
import './Welcomepage.css'
import CustomerReview from './CustomerReview';



const Welcomepage = () => {
   

    return (
        <div  style={{ borderRadius: '10px' , marginTop:'-5px' , marginLeft:'-0.5%' , marginRight:'-10px' }}        >
            <Navbar />
            <img  
                src='/images/Logo.jpeg'
                width="1450"
                height="500"
            />
            <br /><br />
            <div className="card1" >
                <div className="text-content">
                    <p><b>Welcome To</b></p>
                    <h1>KV Restaurant</h1>
                    <p>
                        <b>
                            Located in the heart of the city, KV Restaurant is a culinary gem that offers
                            an exquisite dining experience for all food lovers. Our diverse menu caters
                            to a wide range of tastes and preferences, ensuring that every guest finds
                            something to delight their palate.
                        </b>
                    </p>
                </div>
                <div className="image-content" >
                    <img style={{marginLeft:'16%' , marginRight:"1%"}}
                        src='https://indiarestaurant.co.in/assets/images/gallery/INTERIOR.jpg'
                        alt='service logo'
                    />
                </div>
            </div><br /><br /><br /><br />
            <div className="text-content" style={{ marginLeft: '600px' }}>
                <h1><b>Our Speciality</b></h1>
            </div>
            <div className="image-content">
                <div className="image-content">
                    <img style={{ width: '470px', height: '600px' }}
                        src='images/vegimage.webp'
                        alt='Veg Dish'
                    />
                    <div className="overlay-text">
                        <h5><b>  Delicious Vegetarian </b></h5><br/>
                        For our vegetarian guests, KV Restaurant offers an extensive selection of vibrant and nutritious dishes. Our vegetarian menu is crafted with fresh, locally sourced ingredients to create meals that are both healthy and delicious. Highlights include.
                    </div>
                </div>

                <div className="image-content" style={{ marginLeft: "15px" }}>
                    <img style={{ width: '470px', height: '600px' }}
                        src='https://imgmedia.lbb.in/media/2020/10/a0f87f67-e8de-4d6a-931f-159184fed26d.jpg'
                        alt='Non-Veg Dish'
                    />
                    <div className="overlay-text">
                        <h5><b>Delicacies NonVeg </b></h5><br/>
                        Our non-vegetarian offerings are designed to satisfy meat lovers with a variety of succulent dishes. From classic comfort foods to innovative culinary creations, our menu has something for everyone. Popular dishes include.
                    </div>
                </div>

                <div className="image-content" style={{ marginLeft: "15px" }}>
                    <img style={{ width: '470px', height: '600px' }}
                        src='images/Lobster-dish.jpg'
                        alt='Seafood Dish'
                    />
                    <div className="overlay-text">
                        <h5><b>Delicacies Seafood </b></h5><br/>
                        At KV Restaurant, we pride ourselves on our fresh and flavorful seafood dishes. Sourced from the finest suppliers, our seafood is prepared with the utmost care and attention to detail. Whether you're a fan of succulent prawns, tender calamari, or our renowned seafood platters.
                    </div>
                </div>
            </div><br /><br /><br /><br />

            <div>
                <h1 style={{ marginLeft: '600px' }}><b>Our Service</b></h1><br/><br/>
                <div  style={{ marginLeft: '50px' }}>
                    {/* Text data for the first image */}
                    <div className='card1'>
                    <img 
                        style={{ borderRadius: "10px", width: '600px', height: '500px' }}
                        src='https://images2.alphacoders.com/862/862730.jpg'
                        alt='service logo'
                    />
                    <div style={{ marginLeft: '20px' }}>
                        <h2>Table-Service</h2>
                        <p>
                            <b>
                                Table service offers a personalized dining experience where servers interact directly with customers<br/>
                                take their orders, and cater to their needs throughout the meal.<br/>
                                Menu Presentation: In table service, servers typically present the menu to the guests<br/>
                                provide recommendations, and answer any questions about the dishes or beverages available
                            </b>
                        </p>
                    </div>
                </div>

                    <br /><br /><br />

                    {/* Text data for the second image */}
                    <div className='card1'>
                    <div style={{textAlign:'left'}} >
                        <h2>Excellent Chef's</h2>
                        <p><b>Culinary Skills: A good chef possesses exceptional culinary skills and expertise in various<br/> cooking techniques. They are proficient in preparing a wide range of dishes,<br/> including appetizers, entrees, desserts, and more<br/>
                            reativity and Innovation: Good chefs are creative and innovative, constantly experimenting with flavors,<br/> ingredients, and presentation techniques to create unique and memorable dishes. <br/>They have a keen sense of taste and are able to combine<br/> different ingredients in inventive ways to produce delightful culinary creations.
                        </b></p>
                    </div>
                    <div>
                        <img
                             style={{ borderRadius: "10px", width: '600px', height: '600px' }}
                            src='https://www.turijobs.com/blog/wp-content/uploads/2018/12/Chef-en-Australia.jpg'
                            alt='service logo'
                        />
                    </div>
                    </div>
                </div><br /><br /><br />
            </div>
            <h2 style={{textAlign:'center' , fontWeight:'bold'}}>Customer Reviews</h2>
            <div className='card1'>
            <CustomerReview/>
            </div>
            <Fotter/>
            <ToastContainer />
            
        </div>
    );
};

export default Welcomepage;
