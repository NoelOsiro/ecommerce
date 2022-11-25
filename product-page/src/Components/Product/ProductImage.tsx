import React from 'react'
import { Container,Row,Col, Image } from 'react-bootstrap'
import Pimage from "../../img/image-product-1.jpg";

const ProductImage = () => {
  return (
    <Image src={Pimage} width={350} id="product-image"/>
  )
}

export default ProductImage