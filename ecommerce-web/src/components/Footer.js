import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* Agrega el contenido del pie de página, como información de contacto y enlaces útiles */}
            <div>
                <p>Contacto: contact@greenleafmarket.com</p>
            </div>
            <nav>
                <ul>
                    <li><a href="/terminos">Términos y Condiciones</a></li>
                    <li><a href="/privacidad">Política de Privacidad</a></li>
                    {/* Agrega más enlaces según la estructura de tu aplicación */}
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
