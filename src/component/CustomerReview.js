import React from 'react';
import './CustomerReview.css'; // Import the CSS file for styling

const reviews = [
    { 
        name: "KHASIM", 
        rating: 5, 
        comment: "Amazing food and great service!", 
        photo: "./images/KHASIM.jpg" 
    },
    { 
        name: "Groot", 
        rating: 4, 
        comment: "Really enjoyed the meal, will come again.", 
        photo: "./images/Groot.jpg" 
    },
    { 
        name: "Pawan Kalyan", 
        rating: 3, 
        comment: "Good food but service could be better.", 
        photo: "https://static.toiimg.com/photo/msid-81189517/81189517.jpg" 
    },
    { 
        name: "JustinBerber", 
        rating: 5, 
        comment: "Best dining experience ever!", 
        photo: "https://th.bing.com/th/id/R.0c583bf254c0e3659a1a2a15aadbe19c?rik=4DYAQ8289Vv6iA&riu=http%3a%2f%2fwww.listenherereviews.com%2fwp-content%2fuploads%2f2015%2f01%2fJustin-Bieber.jpg&ehk=YaoHHsuU1n%2bdlXQdtwjLrqVP2sXGv2LTMCe4ZbdX%2bEI%3d&risl=&pid=ImgRaw&r=0" 
    },
    { 
        name: "Ravi Teja", 
        rating: 4, 
        comment: "Delicious food and friendly staff.", 
        photo: "https://cdn.gulte.com/wp-content/uploads/2021/09/ravi-teja.jpg" 
    },
    // Add more reviews as needed
];

const renderStars = (rating) => {
    return (
        <span>
            {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
        </span>
    );
};

const CustomerReview = () => {
    return (
        <div className="customer-review">
            
            <div className="reviews">
                {reviews.map((review, index) => (
                    <div key={index} className="review-container">
                        <img className="review-photo" src={review.photo} alt={`${review.name}'s photo`} />
                        <div className="review-content">
                            <h3>{review.name}</h3>
                            <div className="rating">{renderStars(review.rating)}</div>
                            <p>{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReview;
