import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import Header from './Components/Nav/Header'

function App() {
  return ( 
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </>
  );
}

export default App;
