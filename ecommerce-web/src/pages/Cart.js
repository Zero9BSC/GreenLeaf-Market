import React from 'react';
import '../styles/cart.css';

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  const handleReduceQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
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
      if (item.id === itemId) {
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
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="action-button" onClick={() => handleRemoveItem(item.id)}>
                    Eliminar
                  </button>
                  <div className="quantity-modifier">
                    <button className="quantity-button" onClick={() => handleReduceQuantity(item.id)}>
                      -
                    </button>
                    <button className="quantity-button" onClick={() => handleIncreaseQuantity(item.id)}>
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
              {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
