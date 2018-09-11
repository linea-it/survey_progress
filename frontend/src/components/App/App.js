import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from 'components/About/About'
import Home from 'components/Home/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>HEADER</div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              </Switch>
          </div>
          <div>Footer</div>
        </div>
      </BrowserRouter>
    );
  }
}

// SEGUIR ESSE HOW TO 
// https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d

// CRIAR O CONTAINER
// https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

// REACT ROUTER
// https://egghead.io/lessons/react-create-basic-routes-with-the-react-router-v4-browserrouter

export default App;
