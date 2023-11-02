import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Usuario autenticado
                const user = userCredential.user;
                console.log('Usuario autenticado:', user);
            })
            .catch((error) => {
                // Error de autenticación
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error de autenticación:', errorCode, errorMessage);
            });
    };

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Usuario registrado
                const user = userCredential.user;
                console.log('Usuario registrado:', user);
            })
            .catch((error) => {
                // Error de registro
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error de registro:', errorCode, errorMessage);
            });
    };

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Iniciar sesión</button>
            <h2>Registrarse</h2>
            <button onClick={handleRegister}>Registrarse</button>
        </div>
    );
};

export default Login;
