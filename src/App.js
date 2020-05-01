import React from 'react';
import { BrowserRouter as Router,
Switch, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './pages/home'

function App() {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  );
}

export default App;
