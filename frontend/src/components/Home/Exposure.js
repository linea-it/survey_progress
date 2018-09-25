import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
import CCDPosition from './CCDPosition';
import CCDTable from './CCDTable';
import './Home.css';
import 'primeflex/primeflex.css';
import {Toolbar} from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Exposure extends Component {
  state = this.initialState;

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
  };

  get initialState() {
    return {
      expnum: null
    };
  }

  componentWillMount() {

    const {
      match: { params },
    } = this.props;


    this.setState({expnum: params.expnum})
  }

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
          <div className="p-grid ">
            <div className="p-col-4">
                <Card elevation={Elevation.TWO}>
                  <h4>CCDs</h4>
                  <span>Exposure: {this.state.expnum}</span>
                </Card>
              </div>
            <div className="p-col-8">
              <Card elevation={Elevation.TWO}>
                <CCDPosition expnum={this.state.expnum}/>
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
