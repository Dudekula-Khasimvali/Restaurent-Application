import React from 'react';
import { useCart } from './CartContext';
import Navbar from "./Navbar";
import './Cart.css';

function Cart() {
    const { cart, dispatch } = useCart();

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', id });
    };

    return (
        <div className="container-fluid">
            <Navbar />
            <h1>Your Cart</h1>
            <div className="cartItems">
                {cart.length === 0 ? (
                    <div>Your cart is empty</div>
                ) : (
                    cart.map((product, index) => (
                        <div key={index} className="cartItem">
                            <img src={`data:image/jpeg;base64,${product.image}`} height={100} width={100} alt={product.proName} />
                            <div className="productDetails">
                                <h5>{product.proName}</h5>
                                <p>₹ {product.proPrice.toFixed(2)}</p>
                                <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Cart;
