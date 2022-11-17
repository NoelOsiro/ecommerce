import React from 'react';
import { Container, Row, Col, Button, InputGroup, Form } from 'react-bootstrap';
import { ReactComponent as IconCart } from '../../img/icon-cart.svg';
import { ReactComponent as IconMinus } from '../../img/icon-minus.svg';
import { ReactComponent as IconPlus } from '../../img/icon-plus.svg';

import './pdescr.css';

const Pdescr = () => {
    return (
        <Container className='mt-3 mb-3'>
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
                <Col className='pl-3 mt-2' sm={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>
                            <IconMinus  />
                        </InputGroup.Text>
                        <Form.Control aria-label="Count" value={0} readOnly />
                        <InputGroup.Text>
                            <IconPlus/>
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col className='pl-3' sm={12}>
                    <Button size='lg' id='AddCart'>
                        <IconCart width={22} height={24} fill='white' />
                        Add to cart
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Pdescr