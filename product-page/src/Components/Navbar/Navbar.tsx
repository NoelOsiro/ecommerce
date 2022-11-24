import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap';
import logo from "../../img/logo.svg";
import cartIcon from "../../img/icon-cart.svg";
import avatar from "../../img/image-avatar.png";
import "./navbar.css"


const MainNav:React.FC=()=> {
  return (
    <Navbar bg="light" expand="md">  
    <Container> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Brand href="#home"><Image src={logo}/></Navbar.Brand>  
        <Navbar.Collapse id="basic-navbar-nav" className='ml-5'>  
        <Nav className="me-auto">  
          <Nav.Link href="#home">Collections</Nav.Link>  
          <Nav.Link href="#link" className='ms-4'>Men</Nav.Link>  
          <Nav.Link href="#link" className='ms-4'>Women</Nav.Link> 
          <Nav.Link href="#link" className='ms-4'>About</Nav.Link> 
          <Nav.Link href="#link" className='ms-4'>Contact</Nav.Link>  
        </Nav>  
        </Navbar.Collapse> 
        <div>
            <button id="cartButton"><Image src={cartIcon}/></button>
            <button id="avatarButton"><Image src={avatar} width={40} height={40}/></button></div> 
    </Container>  
  </Navbar>  
  );
}

export default MainNav;
