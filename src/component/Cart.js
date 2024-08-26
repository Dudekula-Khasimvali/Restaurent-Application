import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Fotter from './Fotter'; // Ensure you spell this correctly
import './Cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const userId = sessionStorage.getItem("USER_ID");
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            fetchCartItems(userId);
        } else {
            toast.error("Please login to view cart.", { position: "top-center" });
        }
    }, [userId]);

    const fetchCartItems = (userId) => {
        const url = `http://localhost:3500/api/cart/user/${userId}`;
        axios.get(url)
            .then((response) => {
                setCartItems(response.data || []);
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error);
                toast.error('Failed to fetch cart items. Please try again later.', { position: "top-center" });
            });
    };

    const removeItemFromCart = (itemId) => {
        const url = `http://localhost:3500/api/cart/delete/${itemId}`;
        axios.delete(url)
            .then(() => {
                toast.success('Item removed from cart.', { position: "top-center" });
                setCartItems(cartItems.filter(item => item.id !== itemId));
            })
            .catch((error) => {
                console.error("Error removing item from cart:", error);
                toast.error('Failed to remove item from cart. Please try again.', { position: "top-center" });
            });
    };

    const updateItemQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) return;

        const updatedItems = cartItems.map(item =>
            item.id === itemId ? { ...item, proQuantity: newQuantity } : item
        );
        setCartItems(updatedItems);

        const url = `http://localhost:3500/api/cart/update/${itemId}`;
        axios.put(url, { proQuantity: newQuantity })
            .then(() => {
                toast.success('Quantity updated.', { position: "top-center" });
            })
            .catch((error) => {
                console.error("Error updating item quantity:", error);
                toast.error('Failed to update quantity. Please try again.', { position: "top-center" });
            });
    };

    const placeOrder = () => {
        navigate("/order");
    };

    const proceedToOrder = () => {
        if (cartItems.length === 0) {
            toast.error('Your cart is empty. Add items to proceed.', { position: "top-center" });
            return;
        }
        navigate("/order");
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.proPrice * item.proQuantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container" >
            <Navbar />
            <div className="cart-content">
                <div className="cart-items  ">
                    <h2>My Cart</h2>
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id} className="cart-item">
                                    <div className="item-details">
                                        <img 
                                            src={item.image ? `data:image/jpeg;base64,${item.image}` : 'default-image.png'} 
                                            alt={item.proName} 
                                            className="item-image"
                                        />
                                        <div className="item-info">
                                            <h3>{item.proName}</h3>
                                            <p>₹{item.proPrice.toFixed(2)}</p>
                                            {item.proOriginalPrice && (
                                                <p className="original-price">₹{item.proOriginalPrice.toFixed(2)}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="item-quantity" style={{color:'white'}}>
                                        <button 
                                            className="quantity-btn" 
                                            onClick={() => updateItemQuantity(item.id, item.proQuantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span>{item.proQuantity}</span>
                                        <button 
                                            className="quantity-btn" 
                                            onClick={() => updateItemQuantity(item.id, item.proQuantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="item-total">₹{(item.proPrice * item.proQuantity).toFixed(2)}</p>
                                    <button 
                                        className="order-btn" 
                                        onClick={() => placeOrder(item.id)}
                                    >
                                        🛒
                                    </button>
                                    <button 
                                        className="remove-btn" 
                                        onClick={() => removeItemFromCart(item.id)}
                                    >
                                        🗑️
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{color:'white'}}>Your cart is empty.</p>
                    )}
                    <div className="additional-options">
                        <a href="#" className="promo-code">Enter a promo code</a>
                       
                    </div>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <p>Subtotal</p>
                        <p>₹{calculateTotal()}</p>
                    </div>
                    <div className="summary-row">
                        <p><a href="#" className="estimate-delivery">Estimate Delivery</a></p>
                    </div>
                    <div className="summary-row total-row">
                        <p>Total</p>
                        <p>₹{calculateTotal()}</p>
                    </div>
                    <button 
                        className="checkout-btn" 
                        onClick={proceedToOrder}
                    >
                        Checkout
                    </button>
                    <p className="secure-checkout">🔒 Secure Checkout</p>
                </div>
            </div>
            {/* Footer */}
            <div className="footer-container">
                <Fotter />
            </div>
        </div>
    );
}

export default Cart;
