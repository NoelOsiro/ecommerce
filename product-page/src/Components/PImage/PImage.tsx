import React from 'react'
import { Image } from 'react-bootstrap'
import logo2 from '../../img/image-product-1.jpg';
import previous from '../../img/icon-previous.svg';
import next from '../../img/icon-next.svg';
import './pimage.css';

const PImage: React.FC = () => {
  return (
    <div className='Pimage'>
      <Image src={logo2} height={375} width={375} />
      <button className='previous'>
        <Image src={previous} alt='previous' width={15} height={15} />
      </button>
      <button className='next'>
        <Image src={next} alt='next' width={15} height={15} />
      </button>
    </div>
  )
}

export default PImage