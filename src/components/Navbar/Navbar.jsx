import React, { useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar'>
            <img  className ="logo" src={assets.logo} alt="logo" />
            <ul className='navbar-menu'>
                <li onClick={() => { setMenu("home") }} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => { setMenu("menu") }} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => { setMenu("contact") }} className={menu === "contact" ? "active" : ""}>Contact-us</li>
            </ul>
            <div className='navbar-right'>
                <span class="material-symbols-outlined">
                    shopping_cart_checkout
                </span>
                <button onClick={() => { setShowLogin(true) }}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar