import React from 'react'
import { Container,Row } from 'react-bootstrap'
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import './product.css';

const Product = () => {
  return (
    <Container className='px-5 pt-5'>
        <Row>
            <ProductImage/>
            <ProductDescription/>
        </Row>
        
    </Container>
  )
}

export default Product