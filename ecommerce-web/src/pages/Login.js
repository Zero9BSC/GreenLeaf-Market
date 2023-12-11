// pages/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase';
import '../styles/login.css';

const Login = ({ history }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState(''); // Nuevo estado para repetir la contraseña
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess('Usuario autenticado: ' + user.email);
        setError('');
        history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError('Error de autenticación: ' + errorCode + ' - ' + errorMessage);
        setSuccess('');
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const user = result.user;
        setSuccess('Usuario autenticado con Google: ' + user.email);
        setError('');
        history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError('Error de autenticación con Google: ' + errorCode + ' - ' + errorMessage);
        setSuccess('');
      });
  };

  const handleRegister = () => {
    if (registerPassword !== repeatPassword) {
      setError('Las contraseñas no coinciden');
      setSuccess('');
      return;
    }

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess('Usuario registrado: ' + user.email);
        setError('');
        history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError('Error de registro: ' + errorCode + ' - ' + errorMessage);
        setSuccess('');
      });
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Correo electrónico"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={handleGoogleLogin} className="google-login-button">Iniciar sesión con Google</button>
      <h2>Registrarse</h2>
      <input
        type="text"
        placeholder="Correo electrónico"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Repetir contraseña"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)} // Asegúrate de usar setRepeatPassword aquí
      />
      <button onClick={handleRegister}>Registrarse</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default Login;
