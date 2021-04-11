import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Navi from './components/Navi'
import Home from './components/Home'
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'

function App() {
  const [loginState, setLoginState] = useState<boolean>(false);

  const changeLoginState = (state: boolean) => {
    console.log(state);
    setLoginState(state);

  }

  return (
    <>
      {(() => {
        if (loginState) {
          return <div>login中<button onClick={()=>changeLoginState(false)}>ログアウト</button></div>
        } else {
          return <div>logout中</div>
        }
      })()}
      <Router>
        <Navi loginState={loginState}/>
        <Route exact path='/'><Home /></Route>
        <Route path='/signup' component={Signup} />
        <Route path='/login' render={() => <Login changeLoginState={changeLoginState} />} />
      </Router>
    </>
  );
}

export default App;
