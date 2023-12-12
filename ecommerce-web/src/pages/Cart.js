import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.code !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  const handleReduceQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.code === itemId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.code === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.code} className="cart-item">
                <div className="item-details">
                  <img src={item.image_url} alt={item.product_name} className="item-image" />
                  <div className="item-info">
                    <h3>{item.product_name}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.fixedPrice.toFixed(2)}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="action-button" onClick={() => handleRemoveItem(item.code)}>
                    Eliminar
                  </button>
                  <div className="quantity-modifier">
                    <button className="quantity-button" onClick={() => handleReduceQuantity(item.code)}>
                      -
                    </button>
                    <button className="quantity-button" onClick={() => handleIncreaseQuantity(item.code)}>
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>
              Total a Pagar: $
              {cartItems.reduce((acc, item) => acc + item.fixedPrice * item.quantity, 0).toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <p>El carrito está vacío</p>
      )}
      <Link to="/">Volver al Menú Inicial</Link>
    </div>
  );
};

export default Cart;
