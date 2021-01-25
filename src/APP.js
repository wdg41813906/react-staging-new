import React, { Component } from "react";
import { Router, Link, BrowserRouter, Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="about">about</Link>
          <Link to="home">home</Link>
          <div>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
