import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const product = {
    id: 1,
    name: 'Producto Detalle 1',
    description: 'Descripción detallada del producto.',
    price: 29.99,
    image: 'product1.jpg',
  };

  return (
    <div className="product-details">
      <Header />
      {/* Contenido de detalles del producto */}
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price.toFixed(2)}</p>
          <button>Añadir al carrito</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
