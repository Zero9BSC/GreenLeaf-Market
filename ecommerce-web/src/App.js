import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import LoginGoogle from './pages/LoginGoogle';
import '../src/styles/globalStyles.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/logingoogle" component={LoginGoogle}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;