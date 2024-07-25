import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/*">
                    <img src="https://th.bing.com/th/id/OIP.kCfD_YtwFPSveDehwvsMAQHaEK?rs=1&pid=ImgDetMain" alt="Logo" className="logo" />
                    <b style={{ fontStyle: 'italic', color: 'black' }}>KV Restaurant</b>
                </a>
                <a href='/home'>Home</a>
                <a href='/veg'>Veg</a>
                <a href='/nonveg'>Non Veg</a>
                <a href='/seafood'>SeaFood</a>
                <a href='/drink'>Drinks</a>
                <a className="cart-link" href="/cart">
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </a>
                <a href="/login" className="btn btn-outline-light">LOGIN</a>
            </div>
        </nav>
    );
}

export default Navbar;
