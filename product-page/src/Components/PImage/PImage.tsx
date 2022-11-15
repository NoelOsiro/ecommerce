import React from 'react'
import { Image } from 'react-bootstrap'
import logo2 from '../../img/image-product-1.jpg';
import previous from '../../img/icon-previous.svg';
import next from '../../img/icon-next.svg';

const PImage:React.FC = () => {
  return (
    <div>
        <Image src={logo2} height={375} width={375}/>
    </div>
  )
}

export default PImage