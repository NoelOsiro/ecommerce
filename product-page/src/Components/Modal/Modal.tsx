import React from 'react';
import './modal.css';
import ImageRow from '../Product/ProductImage/ImageRow';
import { ReactComponent as IconNext } from "../../img/icon-next.svg";
import { ReactComponent as IconPrevious } from "../../img/icon-previous.svg";
import { ReactComponent as IconClose } from "../../img/icon-close.svg";

interface IModal {
    clickedImg: string;
    setClickedImg: React.Dispatch<React.SetStateAction<string | null>>
    handelRotationRight: () => void;
    handelRotationLeft: () => void;
}

const Modal: React.FC<IModal> = (props: IModal) => {
    const handleClick = (e: any) => {
        if (e.target.classList.contains("dismiss")) {
            props.setClickedImg(null);
        }
    };
    const handleImageChange = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, filename: string) => {
        props.setClickedImg(filename);
    }
    return (
        <>
            <div className="overlay dismiss" onClick={handleClick}>
                <img src={props.clickedImg} alt="bigger pic" />
                <span className="dismiss" onClick={(handleClick)}>
                    <IconClose fill='white'/>
                </span>
                <div onClick={props.handelRotationLeft} className="overlay-arrows_left">
                    <div>
                        <IconPrevious/>
                    </div>
                </div>
                <div onClick={props.handelRotationRight} className="overlay-arrows_right">
                    <div>
                        <IconNext/>
                    </div>
                </div>
                <ImageRow handleImageChange={handleImageChange}/>
            </div>
        </>
    );
};

export default Modal;