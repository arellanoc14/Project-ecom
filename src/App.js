import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Cart from './components/shop/cart';
import Products from './components/shop/products';
import ProductDetails from './components/shop/productDetails';
import Navbar from './components/shop/Navagationbar';
class App extends Component {
  render() {
    return (
           <main>
                <BrowserRouter>
                  <Navbar />
                   <Switch>   
                         <Route exact path="/" component= {Products} />
                         <Route path="/Cart" component= {Cart} />
                         <Route path="/product/details/:id" component= {ProductDetails} />
                   </Switch>
                </BrowserRouter>
          </main>
    );
  }
}

export default App;
