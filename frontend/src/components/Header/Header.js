import React, { Component } from 'react';
import { Navbar, Alignment, Button} from '@blueprintjs/core'

class Header extends Component {
  render() {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>LSST Survey Progress</Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Button className="bp3-minimal" icon="notifications" />
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="menu" />
            </Navbar.Group>
        </Navbar>   
    );
  }
}

export default Header;