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
      <div className="p-grid home-container ">
          <div className="p-col-4">
              <Card elevation={Elevation.TWO}>
                <HomeForm/>
              </Card>
            </div>
          <div className="p-col-8">
            <Card elevation={Elevation.TWO}>
              <HomePlot/>
            </Card>
          </div>
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
