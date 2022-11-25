import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { ReactComponent as CartIcon } from "../../img/icon-cart.svg";
import { ReactComponent as IconMinus } from "../../img/icon-minus.svg";
import { ReactComponent as IconPlus } from "../../img/icon-plus.svg";

const ProductDescription = () => {
    const [quantity, setQuantity] = React.useState(0);
    const handleAddChange=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setQuantity(quantity+1)
    }
    const handleMinusChange=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        quantity <= 0 ? setQuantity(0):setQuantity(quantity-1);
        
    }
    return (
        <Col>
            <Row className='mt-5'>
                <h4 className='company-title mb-3'>SNEAKER COMPANY</h4>
                <h4 className='product-title mb-3'> Fall Limited Edition Sneakers</h4>
            </Row>
            <Row>
                <p className='product-text pe-5'>This low-profile Sneakers are your perfect casual wear companion.
                    Featuring a durable outer rubber sole, they'll withstand anything the weather can offer.
                </p>
            </Row>
            <Row>
                <Col className='col-4' >
                    <h4 className='price-title'>$ 125.00 <div className='discount'>50%</div></h4>
                    <h4 className='initial-price'>$ 250.00</h4>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col className='col-5'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn plusminus" onClick={handleMinusChange}><IconMinus/></button>
                        <input type="number" name="quantity" id="quantity" value={quantity} readOnly/>
                        <button type="button" className="btn plusminus" onClick={handleAddChange}><IconPlus/></button>
                    </div>
                </Col>
                <Col>
                    <Button size="lg" className='btn-custom' disabled={quantity<=0}>
                        <CartIcon width={22} height={20} /> Add to Cart
                    </Button>
                </Col>
            </Row>
        </Col>



    )
}

export default ProductDescription