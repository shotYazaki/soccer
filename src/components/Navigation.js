import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Navigation extends React.Component {
    render() {
        return(
            <div className="header">
                <Navbar bg="light" expand="lg">
                   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/About">About</Nav.Link>
                     <Nav.Link href="/Contents">Contents</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;