import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from 'components/About/About'
import Home from 'components/Home/Home'
import Header from 'components/Header/Header'
import ImageViewer from 'components/Image/Viewer'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {initFirefly} from 'firefly-api-access';
import Exposure from 'components/Home/Exposure'
class App extends Component {

  state = this.initialState;

  get initialState() {
    return {
      firefly: null,
    };
  }

  componentDidMount() {
    const url= 'http://200.156.254.5:8080/firefly/';
    const getFireflyAPI= initFirefly(url); // return a function that can retrieve the Firelfy API
    getFireflyAPI().then( (firefly) => { // call the function to retrieve API, return a promise with Firefly
      console.log("Firefly: ", firefly)
      window.firefly = firefly;
      window.flag = true
      this.setState({firefly: firefly})
    });
  }

  render() {
 
    return (
        <div className="root">
      {/* // <div className="root bp3-dark"> */}
      
        <div className="layout-wrapper">
          <Header />
          {/* <div className="layout-sidebar"></div> */}
          <div className="layout-content">
          <BrowserRouter>          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/exposure/:expnum" component={Exposure} />
              <Route path="/image" component={ImageViewer} />
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
