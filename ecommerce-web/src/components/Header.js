import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/header.css';

const Header = ({ cartItems }) => {
  const cartItemCount = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="GreenLeaf Market" />
      </div>
      <nav>
        <ul className="navigation-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon">
              <span role="img" aria-label="Carrito">🛒</span>
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </Link>
          </li>
          <li>
            <Link to="/login">Login or Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
