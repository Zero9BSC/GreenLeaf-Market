import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseApp } from '../config/firebase'; // Asegúrate de que la ruta sea correcta

const auth = getAuth(firebaseApp);

const LoginGoogle = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Acceso a la información del usuario
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Manejo de errores aquí
        console.error(error);
      });
  };

  return (
    <div>
      <h2>¡Inicia sesión con Google!</h2>
      <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
    </div>
  );
};

export default LoginGoogle;
