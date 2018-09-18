import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core'
import 'primeflex/primeflex.css';
import {initFirefly} from 'firefly-api-access';
import './Viewer.css';
class ImageViewer extends Component {

  render() {

    const url= 'http://200.156.254.5:8080/firefly/';
    const getFireflyAPI= initFirefly(url); // return a function that can retrieve the Firelfy API
  
    getFireflyAPI().then( (firefly) => { // call the function to retrieve API, return a promise with Firefly
              //  firefly.getViewer().plotURL('http://web.ipac.caltech.edu/staff/roby/demo/wise-m51-band2.fits');
              firefly.showImage('plotHere', {
                URL      : 'http://web.ipac.caltech.edu/staff/roby/demo/wise-m31-level1-3.fits',
                // URL      : 'D00516013_g_c11_r2380p01_immasked.fits',
                Title    : 'Example FITS Image',
                ColorTable : 16,
                // RangeValues : firefly.util.image.RangeValues.serializeSimple('Sigma',-2,8,'Linear'),
                autoExpand: true
  
            });
        }); 

    return (
      <div className="p-grid home-container ">
          <div className="p-col-6">
              <Card elevation={Elevation.TWO}>
                <div id="plotHere" className="viewer-container"></div>
              </Card>
          </div>
      </div>
    )
  }
}

export default ImageViewer;
