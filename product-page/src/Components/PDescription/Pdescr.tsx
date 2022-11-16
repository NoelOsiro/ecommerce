import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './pdescr.css';

const Pdescr = () => {
    return (
        <Container className='mt-3'>
            <Row>
                <p className='company-header pl-3'>SNEAKER COMPANY</p>
                <h3 className='product-title pl-3'>Fall Limited Edition Sneakers</h3>
            </Row>
            <Row>
                <p className='pl-3 pdescription mt-1'>
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
            </Row>
            <Row>
                <Col className='pl-3 current-price mt-1'>
                    $125.00
                </Col>
                <Col className='discount-col'>
                    <div className='discount'>50%</div>
                </Col>
                <Col className='initial-col'>
                    <div className='initial-price'>$250.00</div>
                </Col>
            </Row>
            <Row>
                <Col className='pl-3' sm={12}>
                <Button size='lg'>T%his is a button Here</Button>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Pdescr