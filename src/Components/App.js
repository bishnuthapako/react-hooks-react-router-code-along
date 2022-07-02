import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar';


export default function App() {
  return ( 
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home/>
        </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
        </Route> 
   </Switch>
  </div>
    
  )
}
