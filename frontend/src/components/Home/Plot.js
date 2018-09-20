import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
import { uniqueId } from 'lodash'
import sizeMe from 'react-sizeme'
class HomePlot extends Component {

  constructor(props){
    super(props);

    this.state = this.initialState

    this.id = uniqueId("aladin-container-")

    // Instancia do Aladin linkado com a div
    this.aladin = null;

    // Verificar se a lib Aladin esta disponivel
    if (window.A) {
      this.libA = window.A;
    }
  }

  get initialState() {
    return {
    };
  }

  get aladinOptions() {
    return {
      fov:180,
      target: '02 23 11.851 -09 40 21.59',
      cooFrame: 'J2000',
      survey: "P/DSS2/color",
      showReticle: true,
      showZoomControl: true,
      showFullscreenControl: true,
      showLayersControl: false,
      showGotoControl: false,
      showShareControl: false,
      showCatalog: true,
      showFrame: false,
      showCooGrid: false,
      fullScreen: false,
      reticleColor: 'rgb(178, 50, 178)',
      reticleSize: 28,
      log: true,
      allowFullZoomout: true
    }    
  }

  componentWillMount(){
    // Antes do Render do Component

  }

  componentDidMount=()=>{
    console.log("Depois do component estar renderizado")

    // const aladin = this.create_aladin();
    // console.log("Aladin: ", aladin)
  }

  componentDidUpdate=()=>{
    console.log("Depois do componente ter atualizado")
    const aladin = this.create_aladin();
  }

  create_aladin =()=>{
    console.log(this.id)

    // this.aladin = this.libA.aladin(
    //   // Id da div que recebera o aladin
    //   '#aladin-lite-div',
    //   // '#' + this.id,
    //   // opcoes do aladin
    //   this.aladinOptions
    // )

    window.A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:60});

    return this.aladin;

  }
  

  render() {
    console.log("render")
    // Ajuste no Tamanho do container
    let { width, height } = this.props.size
    if (height === 0) {
      height = width / 2;
    }

    return (
      // <div id={this.id} className="aladin-container" width={width} height={height}></div>
      // <div id={this.id} className="aladin-container"></div>
      <div id="aladin-lite-div" style={{width:width, height:height}}></div>
    );
  }
}

export default sizeMe({ monitorHeight: false, monitorWidth: true })(HomePlot);
// export default HomePlot;
