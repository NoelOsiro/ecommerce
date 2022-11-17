import React from 'react';
import { SidebarData } from './SideBarData';
import './sidebar.css';
interface Iprops{
    show:boolean;
    setShow:() => void;
}


const Sidebar:React.FC<Iprops>=(props:Iprops) =>{
  return (
    <nav className={props.show ? 'nav-menu active' : 'nav-menu'}>  
     <ul className='nav-menu-items' onClick={()=>props.setShow}>
          </ul>
    </nav>
  )
}



export default Sidebar
