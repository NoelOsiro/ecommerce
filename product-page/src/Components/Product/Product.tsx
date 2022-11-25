import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import './product.css';

const Product = () => {
  return (
    <Container className='mt-2 p-5'>
        <Row>
            <Col><ProductImage/></Col>
            <ProductDescription/>
        </Row>
        
    </Container>
  )
}

export default Product