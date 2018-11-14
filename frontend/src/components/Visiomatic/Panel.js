import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
import 'primeflex/primeflex.css';
import './Viewer.css';
import {Toolbar} from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { withRouter } from 'react-router-dom';
import { uniqueId } from 'lodash'
import sizeMe from 'react-sizeme'
class VisiomaticPanel extends Component {

  constructor(props){
    super(props);

    this.state = this.initialState

    this.id = uniqueId("visiomatic-container-")

    // Instancia do Visiomatic linkado com a div
    this.visiomatic = null;

    // Verificar se a lib Aladin esta disponivel
    if (window.L) {
      this.libL = window.L;      
      console.log("Leaflet Carregado")
    } else {
      console.log("Leaflet NÃO CARREGADO!")
    }      
  }

  get initialState() {
    return {};
  }

  componentDidMount() {
    console.log("Visiomatic - DidMount")

    const map = this.libL.map(this.id, 
      {fullscreenControl: true, zoom: 5});
    
    this.libL.control.scale.wcs({pixels: false}).addTo(map);
    this.libL.control.reticle().addTo(map);
    
    var wcsControl = this.libL.control.wcs({
      coordinates: [{label: 'RA,Dec', units: 'HMS'}],
      position: 'topright'
    }).addTo(map);

  }

  componentWillUnmount() {
    console.log("Visiomatic UnMount")
   
  }


  showImage =()=> {

  }

  onBack = () => {
    const history = this.props.history;
    history.push({ pathname: `/` });    
  };

  render() {
    // Ajuste no Tamanho do container
    let { width, height } = this.props.size
    if (height === 0) {
      height = width / 2;
    }

    // width = width - 50;
    // height = height - 50;

    return (
      <div>
        <Toolbar>
          <div className="p-toolbar-group-left">
              <Button label="Back"  style={{marginRight:'.25em'}} onClick={() => this.onBack()} />
          </div>
        </Toolbar>
        <div className="p-grid home-container ">
            <div className="p-col-6">
                  <div id={this.id} className="visiomatic-container" style={{width:width, height:height}}></div>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(sizeMe({ monitorHeight: false, monitorWidth: true })(VisiomaticPanel));
