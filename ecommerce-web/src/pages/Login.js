import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import '../styles/login.css';
import LoginGoogle from '../pages/LoginGoogle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess('Usuario autenticado: ' + user.email);
        setError('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError('Error de autenticación: ' + errorCode + ' - ' + errorMessage);
        setSuccess('');
      });
  };

  const handleRegister = () => {
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      setSuccess('');
      return;
    }

    createUserWithEmailAndPassword(auth, newEmail, newPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess('Usuario registrado: ' + user.email);
        setError('');
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
      <div className="login-section">
        <h2>¡INGRESA!</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button onClick={handleLogin}>Iniciar sesión</button>
          <LoginGoogle />
        </div>
      </div>
      <div className="signup-section">
        <h2>¡REGÍSTRATE!</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Repita Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button onClick={handleRegister}>Crear Usuario</button>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default Login;
