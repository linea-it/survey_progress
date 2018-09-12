import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
class HomePlot extends Component {
  state = this.initialState;

  get initialState() {
    return {
    };
  }

  render() {
    return (
    <Card interactive={true} elevation={Elevation.TWO}>

    </Card>
    );
  }
}

export default HomePlot;
