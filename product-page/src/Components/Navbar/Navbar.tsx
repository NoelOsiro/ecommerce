import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from "../../img/logo.svg";
import cartIcon from "../../img/icon-cart.svg";
// import menuIcon from "../../img/icon-menu.svg";
import avatar from "../../img/image-avatar.png";
import "./navbar.css"
import ListGroupWithHeaderExample from '../Cart/Card';
import { useCart } from '../Cart/CartContext';


const MainNav: React.FC = () => {
  const [toggleMenu,setToggleMenu]=React.useState(false);
  const [toggleCart,setToggleCart]=React.useState(true);
  const { cartItems } = useCart();
  const handleToggle=()=>{
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu)
  }
  const handleToggleCart=()=>{
    setToggleCart(!toggleCart);

  }
  
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <button className="navbar-toggler collapsed" onClick={handleToggle}><svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#00000" fillRule="evenodd" /></svg></button>
        <Navbar.Brand href="#home"><Image src={logo} /></Navbar.Brand>
        <div id="basic-navbar-nav" className="navbar-collapse collapse" hidden={toggleMenu} >
          <Nav className="me-auto">
            <Nav.Link href="#home">Collections</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>Men</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>Women</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>About</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>Contact</Nav.Link>
          </Nav>
        </div>
        
        <div>
          <button id="cartButton" onClick={handleToggleCart}><Image src={cartIcon} /><span className="badge badge-danger">{cartItems.length}</span></button>
          <button id="avatarButton"><Image src={avatar} width={40} height={40} /></button></div>
      </Container>
      <ListGroupWithHeaderExample hidden={toggleCart}/>
    </Navbar>
  );
}

export default MainNav;
