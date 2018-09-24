import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
import HomeForm from './Form';
import ExposurePosition from './ExposurePosition';
import ExposureTable from './ExposureTable';
import './Home.css';
import 'primeflex/primeflex.css';
class Home extends Component {
  render() {
    return (
      <div className="p-grid home-container ">
          <div className="p-col-4">
              <Card elevation={Elevation.TWO}>
                <h4>Exposures</h4>
                <HomeForm/>
              </Card>
            </div>
          <div className="p-col-8">
            <Card elevation={Elevation.TWO}>
              <ExposurePosition/>
            </Card>
          </div>
          <div className="p-col">
            <Card elevation={Elevation.TWO}>
              <ExposureTable />
            </Card>
          </div>
      </div>
    );
  }
}

export default Home;
