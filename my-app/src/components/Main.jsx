import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import data from "../Data/data.json"
import App from "../App"
import Cart from "./Cart"
import Header from "./Header"
import About from './About';


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
            <Cart cart={this.state.cart}/>
        </Route>

        </Switch>        
        </BrowserRouter>
        )
    }
}
