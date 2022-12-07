import React from 'react'
import { Col, Image } from 'react-bootstrap'
import Pimage from "../../../img/image-product-1.jpg";
import Pimage2 from "../../../img/image-product-2.jpg";
import Pimage3 from "../../../img/image-product-3.jpg";
import Pimage4 from "../../../img/image-product-4.jpg";
import { images } from '../../../Services/Data/image';
import Modal from '../../Modal/Modal';
import ImageRow from './ImageRow';
import { ReactComponent as IconPrevious } from "../../../img/icon-previous.svg";
import { ReactComponent as IconNext } from "../../../img/icon-next.svg";


const ProductImage = () => {
    const [imageToggle, setimageToggle] = React.useState(Pimage);
    const [clickedImg, setClickedImg] = React.useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);
    // Rotation right
    const handelRotationRight = () => {
        const totalLength = images.length;
        if (currentIndex) {
            if (currentIndex + 1 >= totalLength) {
                setCurrentIndex(0);
                const newUrl = images[0].link;
                setClickedImg(newUrl);
                return;
            }
            const newIndex = currentIndex + 1;
            const newUrl = images.filter((item) => {
                return images.indexOf(item) === newIndex;
            });
            const newItem = newUrl[0].link;
            setClickedImg(newItem);
            setCurrentIndex(newIndex)
        };
    };
    // Rotation Left
    const handelRotationLeft = () => {
        const totalLength = images.length;
        if (currentIndex) {
            if (currentIndex === 0) {
                setCurrentIndex(totalLength - 1);
                const newUrl = images[totalLength - 1].link;
                setClickedImg(newUrl);
                return;
            }
            const newIndex = currentIndex - 1;
            const newUrl = images.filter((item) => {
                return images.indexOf(item) === newIndex;
            });
            const newItem = newUrl[0].link;
            setClickedImg(newItem);
            setCurrentIndex(newIndex);
        };
    };
    //Handle Click
    const handleClick = (item: string) => {
        switch (item) {
            case Pimage:
                setCurrentIndex(0);
                setClickedImg(item);
                break;
            case Pimage2:
                setCurrentIndex(1);
                setClickedImg(item);
                break;
            case Pimage3:
                setCurrentIndex(2);
                setClickedImg(item);
                break;
            case Pimage4:
                setCurrentIndex(3);
                setClickedImg(item);
                break;

        }

    };
    //Handle Image Change
    const handleImageChange = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, filename: string) => {
        setimageToggle(filename);
    }
    return (
        <Col>
            <Image src={imageToggle} width={370} id="product-image" onClick={() => handleClick(imageToggle)} />
            <div  className="overlay-arrows_left">
                    <div onClick={handelRotationLeft}  >
                        <IconPrevious/>
                    </div>
                </div>
                <div className="overlay-arrows_right">
                    <div onClick={handelRotationRight}   >
                        <IconNext/>
                    </div>
                </div>
            <ImageRow handleImageChange={handleImageChange} />
            <div>
                {clickedImg && (
                    <Modal
                        clickedImg={clickedImg}
                        handelRotationRight={handelRotationRight}
                        setClickedImg={setClickedImg}
                        handelRotationLeft={handelRotationLeft}
                    />
                )}
            </div>
        </Col>
    )
}
export default ProductImage