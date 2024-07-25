import React from 'react';

const DiscountCalculator = ({ category, price }) => {
    const discounts = {
        veg: 0.10, // 10% discount for veg
        nonveg: 0.15, // 15% discount for non-veg
        seafood: 0.20, // 20% discount for seafood
        drink: 0.05,
    };

    // Ensure category is lowercase to match discounts keys
    const lowercaseCategory = category.toLowerCase();

    // Use the lowercase category to get the discount rate
    const discountRate = discounts[lowercaseCategory] || 0;

    // Calculate the discounted price
    const discountedPrice = (price * (1 - discountRate)).toFixed(2);

    // Calculate the discount percentage
    const discountPercentage = (discountRate * 100).toFixed(0);

    return (
        <div>
            <span className="discountedPrice">₹ {discountedPrice}</span>
            <span className="discount">
                <sup style={{ color: 'red' }}>({discountPercentage}% off)</sup>
            </span>
        </div>
    );
};

export default DiscountCalculator;
