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
        console.log(id);
        this.setState({cart: [...this.state.cart, this.state.data.filter(bier => bier.id === id)]})
      }

    render () {

    return (
       <BrowserRouter>
       <Header length={this.state.cart.length}/>
        <Switch>
        
        <Route path="/" component={App} exact/>
        <Route path="/about" component={About} exact/>

        <Route path="/cart" component={Cart} exact/>
        
        </Switch>        
        </BrowserRouter>
        )
    }
}
