import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: 'Producto 1', price: 19.99, image: 'product1.jpg' },
  { id: 2, name: 'Producto 2', price: 29.99, image: 'product2.jpg' },
  { id: 3, name: 'Producto 3', price: 24.99, image: 'product3.jpg' },
  { id: 4, name: 'Oferta Especial 1', price: 9.99, image: 'special1.jpg' },
  { id: 5, name: 'Oferta Especial 2', price: 14.99, image: 'special2.jpg' }
];

const Home = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="home">
      <Header cartItems={cartItems} />
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>Añadir al carrito</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;