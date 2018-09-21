import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
import 'primeflex/primeflex.css';
import './Viewer.css';
import {Toolbar} from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { withRouter } from 'react-router-dom';

class ImageViewer extends Component {
  state = this.initialState;

  get initialState() {
    return {
      enable_viewer: false,
      firefly: null,
    };
  }

  componentDidMount() {
    if (window.firefly && window.flag) {
      window.firefly.showImage('plotHere', {
        URL      : 'http://web.ipac.caltech.edu/staff/roby/demo/wise-m31-level1-3.fits',
        Title    : 'Example FITS Image',
        ColorTable : 16,
        // RangeValues : firefly.util.image.RangeValues.serializeSimple('Sigma',-2,8,'Linear'),
        autoExpand: true
      });

      window.flag = false;
    }
  }

  componentWillUnmount() {
    console.log("Viewer UnMount")
   
    // const viewer = this.state.firefly.getViewer();
    // viewer.reinitViewer();
    // console.log("viewer: ", viewer)



    // this.setState({enable_viewer: false})
  }


  showImage =()=> {
    // console.log(this.start_firefly)

    // window.firefly.showImage('plotHere', {
    //   URL      : 'http://web.ipac.caltech.edu/staff/roby/demo/wise-m31-level1-3.fits',
    //   Title    : 'Example FITS Image',
    //   ColorTable : 16,
    //   // RangeValues : firefly.util.image.RangeValues.serializeSimple('Sigma',-2,8,'Linear'),
    //   autoExpand: true
    // });

    // const url= 'http://200.156.254.5:8080/firefly/';
    // const getFireflyAPI= initFirefly(url); // return a function that can retrieve the Firelfy API
    
    // getFireflyAPI().then( (firefly) => { // call the function to retrieve API, return a promise with Firefly

    //   console.log("Firefly: ", firefly)

    //   firefly.showImage('plotHere', {
    //     URL      : 'http://web.ipac.caltech.edu/staff/roby/demo/wise-m31-level1-3.fits',
    //     Title    : 'Example FITS Image',
    //     ColorTable : 16,
    //     // RangeValues : firefly.util.image.RangeValues.serializeSimple('Sigma',-2,8,'Linear'),
    //     autoExpand: true
    //   });
    //   this.setState({firefly: firefly})
    // });    
  }

  onBack = () => {
    // this.props.view_asteroid(asteroid_id);
    const history = this.props.history;
    history.push({ pathname: `/` });    
  };

  render() {

    // const url= 'http://200.156.254.5:8080/firefly/';
    // const getFireflyAPI= initFirefly(url); // return a function that can retrieve the Firelfy API
  
    // getFireflyAPI().then( (firefly) => { // call the function to retrieve API, return a promise with Firefly
    //           //  firefly.getViewer().plotURL('http://web.ipac.caltech.edu/staff/roby/demo/wise-m51-band2.fits');
    //           firefly.showImage('plotHere', {
    //             URL      : 'http://web.ipac.caltech.edu/staff/roby/demo/wise-m31-level1-3.fits',
    //             // URL      : 'D00516013_g_c11_r2380p01_immasked.fits',
    //             Title    : 'Example FITS Image',
    //             ColorTable : 16,
    //             // RangeValues : firefly.util.image.RangeValues.serializeSimple('Sigma',-2,8,'Linear'),
    //             autoExpand: true
  
    //         });
    //     }); 

    // if (window.firefly) {
    //   window.firefly.showImage('plotHere', {
    //     URL      : 'http://web.ipac.caltech.edu/staff/roby/demo/wise-m31-level1-3.fits',
    //     Title    : 'Example FITS Image',
    //     ColorTable : 16,
    //     // RangeValues : firefly.util.image.RangeValues.serializeSimple('Sigma',-2,8,'Linear'),
    //     autoExpand: true
    //   });
    // } 

    return (
      <div>
        <Toolbar>
          <div className="p-toolbar-group-left">
              <Button label="Back"  style={{marginRight:'.25em'}} onClick={() => this.onBack()} />
          </div>
        </Toolbar>
        <div className="p-grid home-container ">
            <div className="p-col-6">
                <Card elevation={Elevation.TWO}>
                  <div id="plotHere" className="viewer-container"></div>;
                </Card>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ImageViewer);
