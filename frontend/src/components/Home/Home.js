import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
import HomeForm from './Form';
import HomePlot from './Plot';
import HomeTable from './Table';
import './Home.css';
import 'primeflex/primeflex.css';
class Home extends Component {
  render() {
    return (
      // <div className="container  row-wrap">
      //   <div className="item grow6">
      //     <HomeForm />
      //   </div>
      //   <div className="item grow6">
      //     <HomePlot/>
      //   </div>
      //   <HomePlot/>
      // </div>      

      <div className="p-grid home-container ">
          <div className="p-col-4"><HomeForm/></div>
          <div className="p-col-8"><HomePlot/></div>
          <div className="p-col">
            <Card elevation={Elevation.TWO}>
              <HomeTable />
            </Card>
          </div>
      </div>
    );
  }
}

export default Home;
