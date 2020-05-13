import React from 'react';
import { BrowserRouter as Router,
Switch, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './pages/home'
import About from './pages/About'

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
