import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from 'components/About/About'
import Home from 'components/Home/Home'
import Header from 'components/Header/Header'
class App extends Component {
  render() {
    return (
      <div className="root bp3-dark">
      
        <div className="layout-wrapper">
          <Header />
          {/* <div className="layout-sidebar"></div> */}
          <div className="layout-content">
          <BrowserRouter>          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
            </BrowserRouter>
          </div>
        </div>

      </div>
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
