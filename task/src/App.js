import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Offer from './Offer';
import About from './About';
import Warehouse from './Warehouse';
import Login from './Login';
import SignUp from './SignUp';
import Products from './Products';
import Transport from './Transport';
import Cart from './Cart';
import Mobile from './Mobile';
import Laptop from './Laptop';
import Households from './Households';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
      <Navbar/>
 
  <Switch>
      <Route path="/offer" exact={true}><Offer/></Route>
      <Route path="/about"exact={true} ><About/></Route>
         <Route path="/warehouse"exact={true} ><Warehouse/></Route>
        <Route path="/login"exact={true} ><Login/></Route>
        <Route path="/signup"exact={true}><SignUp/></Route>
        <Route path="/products"exact={true} ><Products/></Route>
        <Route path="/transport"exact={true} ><Transport/></Route>
        <Route path ="/Cart"exact={true}><Cart/></Route>
        <Route path="/mobile"exact={true} ><Mobile/></Route>
        <Route path="/laptop"exact={true} ><Laptop/></Route>
        <Route path ="/households"exact={true} ><Households/></Route>
      </Switch>
     </div>
     </BrowserRouter>
    );

  }
}

export default App;

