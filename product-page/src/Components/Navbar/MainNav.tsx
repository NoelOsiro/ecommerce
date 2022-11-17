import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './navbar.css'
import { ReactComponent as IconCart } from '../../img/icon-cart.svg';
import logo from '../../img/logo.svg';
import logo2 from '../../img/image-avatar.png';
import Sidebar from '../Sidebar/Sidebar';

const MainNav: React.FC = () => {
  const [toggleSide, settoggleSide] = React.useState(false);
  const toggleSidebar = () => {
    settoggleSide(!toggleSide);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle onClick={toggleSidebar} />
        <Navbar.Brand href="#home">
          <img src={logo} alt='logo' />
        </Navbar.Brand>
        <div className='nav-icons'>
          <button id='cartIcon'>
            <IconCart width={22} height={24} />
          </button>
          <img src={logo2} alt='' width={24} height={24} id='avatarIcon' />
        </div>
      </Container>
      <Sidebar show={toggleSide} setShow={()=>toggleSidebar()}/>
    </Navbar>
  )
}

export default MainNav