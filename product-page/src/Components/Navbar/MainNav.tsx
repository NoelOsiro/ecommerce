import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css'
import { ReactComponent as IconCart } from '../../img/icon-cart.svg';
import logo from '../../img/logo.svg';
import logo2 from '../../img/image-avatar.png';

const MainNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">
          <img src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className='nav-icons'>     
            <button id='cartIcon'>
              <IconCart width={22} height={24} />
            </button>
            <img src={logo2} alt='' width={24} height={24} id='avatarIcon'/>
        </div>
      </Container>
    </Navbar>
  )
}

export default MainNav