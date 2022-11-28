import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Pimage from "../../img/image-product-1.jpg";
import Pimage2 from "../../img/image-product-2.jpg";
import Pimage3 from "../../img/image-product-3.jpg";
import Pimage4 from "../../img/image-product-4.jpg";
import Pthumb from "../../img/image-product-1-thumbnail.jpg";
import Pthumb2 from "../../img/image-product-2-thumbnail.jpg";
import Pthumb3 from "../../img/image-product-3-thumbnail.jpg";
import Pthumb4 from "../../img/image-product-4-thumbnail.jpg";


const ProductImage = () => {
    const [imageToggle, setimageToggle] = React.useState(Pimage);

    const handleImageChange = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, filename: string) => {
        setimageToggle(filename);
    }
    return (
        <Col>
            <Image src={imageToggle} width={370} id="product-image" />
            <Row className='mt-2 gx-1 px-5 '>
                <Col className='col-3'><Image src={Pthumb} className="image-thumb" onClick={(e) => handleImageChange(e, Pimage)} /></Col>
                <Col className='col-3'><Image src={Pthumb2} className="image-thumb" onClick={(e) => handleImageChange(e, Pimage2)} /></Col>
                <Col className='col-3'><Image src={Pthumb3} className="image-thumb" onClick={(e) => handleImageChange(e, Pimage3)} /></Col>
                <Col className='col-3'><Image src={Pthumb4} className="image-thumb" onClick={(e) => handleImageChange(e, Pimage4)} /></Col>
            </Row>

        </Col>

    )
}

export default ProductImage