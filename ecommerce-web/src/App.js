import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart'; // Asegúrate de importar correctamente tu componente Cart
import '../src/styles/globalStyles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          {/* Otras rutas aquí si es necesario */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;