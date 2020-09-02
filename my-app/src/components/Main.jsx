import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import data from "../Data/data.json"
import App from "../App"
import Cart from "./Cart"
import Header from "./Header"
import About from './About';
import Help from "./Help"
import NotFound from "./NotFound" 


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: data,
          cart: [] 
        };
      }

      addToCart = (id) => {
        const temp = this.state.data.filter(bier => bier.id === id);
        console.log(temp);
        this.setState({cart: [...this.state.cart, temp[0]]})
      }

      removeFromCart = (id) => {
        const index = this.state.cart.findIndex(item => item.id === id);
        const newBeerArr = [...this.state.cart];
        newBeerArr.splice(index, 1);
        this.setState({
          cart: newBeerArr
        });
      }   

    render () {

    return (
      <BrowserRouter>
        <Header length={this.state.cart.length}/>
        <Switch>
        
        <Route path="/" exact>
            <App data={this.state.data} addToCart={this.addToCart} cart={this.state.cart} />      
        </Route>

        <Route path="/about" component={About} exact/>

        <Route path="/cart" exact>
            <Cart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
        </Route>
        <Route path="/help" component={Help} exact/>
        <Route component={NotFound} />

        </Switch>        
        </BrowserRouter>
        )
    }
}
