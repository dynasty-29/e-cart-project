import React from 'react';

//navbar component from react-icons
import { FaHome} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { AiFillMessage } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import './Navbar.css';

// Navbar component
function NavBar() {
  return (
    <nav id="navbar">
        <ul>
          <li><a href='#home' title='Home'><FaHome /></a></li>
          <li><a href='#about' title='About Us'><FcAbout /></a></li>
          <li><a href='#products' title='Products'><AiFillProduct /></a></li>
          <li><a href='#checkout' title='Checkout'><MdOutlineShoppingCartCheckout /></a></li>
          <li><a href='#footer' title='Talk to Us'><AiFillMessage /></a></li>
        </ul>    
    </nav>
  );
}
export default NavBar;