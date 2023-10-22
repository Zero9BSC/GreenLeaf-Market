import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header>
            {/* Agregar el contenido del encabezado, como el logotipo y la barra de navegación */}
            <div>
                {/* Aquí va el logotipo */}
                <h1>GreenLeaf Market</h1>
            </div>
            <nav>
                {/* Aquí van los enlaces de navegación */}
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    {/* Agrega más enlaces según la estructura de la aplicación */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
