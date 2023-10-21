import React from 'react';

const Cart = ({ cartItems, total }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>Cantidad: {item.quantity}</span>
              <span>Precio: ${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-total">
        <p>Total a Pagar: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
