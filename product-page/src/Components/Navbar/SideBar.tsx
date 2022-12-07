import React from 'react'
import { ReactComponent as IconClose } from "../../img/icon-close.svg";
interface Iprops {
    show: boolean;
    hide: () => void;
}
const SideBar: React.FC<Iprops> = (props: Iprops) => {
  return (
    <div className="overlay dismiss" hidden={!props.show}>
        <div className='sidebar'>
         <span onClick={props.hide} className="ms-3"><IconClose width={20} height={20} fontSize={20} fill={'#000000'}/></span>
         <div className='sidebar_urls'>
            <ul>
                <li className='siderBarLink'>Men</li>
                <li className='siderBarLink'>Women</li>
                <li className='siderBarLink'>About</li>
                <li className='siderBarLink'>Contact Us</li>
            </ul>
         </div>
        </div>
        
    </div>
  )
}

export default SideBar