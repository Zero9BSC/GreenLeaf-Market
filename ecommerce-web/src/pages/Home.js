import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    // Obtener productos aleatorios de la API de Open Food Facts
    fetch('https://world.openfoodfacts.org/cgi/search.pl?json=1&page_size=6&action=process&sort_by=unique_scans_n')
      .then((response) => response.json())
      .then((data) => {
        // Precios fijos para cada producto
        const fixedPrices = [
          19.70,  // Precio fijo para el primer producto
          14.89,  // Precio fijo para el segundo producto
          20.00,
          9.55,
          35.14,
          10.38,
          // ... Continuar con los precios fijos para los demás productos
        ];

        // Asignar precios fijos y agregar a productos destacados
        const featured = data.products.slice(0, 3).map((product, index) => ({
          ...product,
          fixedPrice: fixedPrices[index],
        }));

        // Asignar precios fijos y agregar a otras ofertas
        const others = data.products.slice(3, 6).map((product, index) => ({
          ...product,
          fixedPrice: fixedPrices[index + 3], // Sumar 3 para mantener la unicidad de precios
        }));

        setFeaturedProducts(featured);
        setOtherProducts(others);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.code === item.code);
    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.code === item.code ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
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
          {featuredProducts.map((product) => (
            <div key={product.code} className="product">
              <div className="product-img">
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  className="product-img"
                />
              </div>
              <h3 title={product.product_name}>{product.product_name.substring(0, 25)}</h3>
              <p>${product.fixedPrice}</p>
              <button onClick={() => handleAddToCart(product)}>
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="other-products">
        <h2>Otras Ofertas</h2>
        <div className="product-list">
          {otherProducts.map((product) => (
            <div key={product.code} className="product">
              <div className="product-img">
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  className="product-img"
                />
              </div>
              <h3 title={product.product_name}>{product.product_name.substring(0, 25)}</h3>
              <p>${product.fixedPrice}</p>
              <button onClick={() => handleAddToCart(product)}>
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
