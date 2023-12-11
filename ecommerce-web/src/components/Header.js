import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../assets/logo.png';
import '../styles/header.css';

const Header = ({ cartItems }) => {
  const [user, setUser] = useState(null);
  const cartItemCount = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  // Verifica si hay un usuario autenticado cuando el componente se monta
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Limpia el efecto cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  // Función para cerrar sesión
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

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
            {user ? (
              <>
                <span>Hola, {user.displayName || user.email.split('@')[0]}</span>
                <span> </span><button onClick={handleLogout}>Cerrar Sesión</button>
              </>
            ) : (
              <Link to="/login">Iniciar Sesión o Registrarse</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;