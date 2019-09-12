import React, { Component } from 'react';
import {BrowserRouter, Route, } from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'

import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div >
                <Link to="/home">Shop</Link>
                <Link to="/cart">Cart</Link>

                    <Route exact path="/home" component={Home}/>
                    <Route path="/cart" component={Cart}/>

             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
