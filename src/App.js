import React from 'react';
import { BrowserRouter as Router,
Switch, Route } from 'react-router-dom'

import './App.css';
import "aos/dist/aos.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/ContactForm'
import Products from './pages/Products'
import Details from './pages/Details'
import Cart from './pages/Cart';

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/products' exact component={Products} />
        <Route path='/details' exact component={Details} />
        <Route path='/cart' exact component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
