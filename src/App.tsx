import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Navi from './components/Navi'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navi />

        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </Router>
    </>
  );
}

export default App;
