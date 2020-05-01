import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListaDeObjetivos from './ListaDeObjetivos';



class App extends Component {

  constructor(props) {
    super(props);
    this.props = props.isRender;
    this.state = {
      list : [],
      test : ""
    };
  }

  handleChange = (e) => {
    this.setState({list : e.target.value.split("\n")});
    this.setState({test : e.target.value});
    console.log(this.state.list);    
  };

  
  render() {
    if (this.props.isRender) {
      return (
        <div className="App">
          <header className="App-header">
              <form >
                <label className="elementosList">
Enter the text you want to become a list</label>
                <p><textarea name="texto" onChange={this.handleChange}></textarea></p>
              </form>
              {this.state.list.map((itemLista) =>
              <div className="container">
                <ListaDeObjetivos item={itemLista} ></ListaDeObjetivos>
              </div>
              )}
          </header>
              
        </div>
      );
    } else {
      return (
        <div>{this.state}</div>
      );
    }
  }
}
export default App;
