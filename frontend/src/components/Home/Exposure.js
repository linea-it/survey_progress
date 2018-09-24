import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
import CCDPoisition from './CCDPosition';
import CCDTable from './CCDTable';
import './Home.css';
import 'primeflex/primeflex.css';
import {Toolbar} from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { withRouter } from 'react-router-dom';
class Exposure extends Component {

  onBack = () => {
    // this.props.view_asteroid(asteroid_id);
    const history = this.props.history;
    history.push({ pathname: `/` });    
  };

  render() {
    return (      
      <div>
          <Toolbar>
            <div className="p-toolbar-group-left">
                <Button label="Back"  style={{marginRight:'.25em'}} onClick={() => this.onBack()} />
            </div>
          </Toolbar>      
          <div className="p-grid home-container ">
            <div className="p-col-4">
                <Card elevation={Elevation.TWO}>
                  <h4>CCDs</h4>
                  <spam>Exposure: 516013</spam>
                </Card>
              </div>
            <div className="p-col-8">
              <Card elevation={Elevation.TWO}>
                <CCDPoisition />
              </Card>
            </div>
            <div className="p-col">
              <Card elevation={Elevation.TWO}>
                <CCDTable />
              </Card>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Exposure);
