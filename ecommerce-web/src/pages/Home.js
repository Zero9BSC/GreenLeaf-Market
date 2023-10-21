import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Producto 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Producto 2', price: 29.99, image: 'product2.jpg' },
    { id: 3, name: 'Producto 3', price: 24.99, image: 'product3.jpg' },
  ];

  const specialOffers = [
    { id: 4, name: 'Oferta Especial 1', price: 9.99, image: 'special1.jpg' },
    { id: 5, name: 'Oferta Especial 2', price: 14.99, image: 'special2.jpg' },
  ];

  return (
    <div className="home">
      <Header />
      {/* Sección de Productos Destacados */}
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button>Añadir al carrito</button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Sección de Ofertas Especiales */}
      <section className="special-offers">
        <h2>Ofertas Especiales</h2>
        <div className="offer-list">
          {specialOffers.map((offer) => (
            <div key={offer.id} className="offer">
              <img src={offer.image} alt={offer.name} />
              <h3>{offer.name}</h3>
              <p>${offer.price.toFixed(2)}</p>
              <button>Añadir al carrito</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

