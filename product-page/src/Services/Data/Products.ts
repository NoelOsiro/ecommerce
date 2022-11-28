import Pthumb from "../../img/image-product-1-thumbnail.jpg";
import Pimage from "../../img/image-product-1.jpg";

export interface Iproduct {
    id: string;
    company: string;
    title: string;
    description: "This low-profile Sneakers are your perfect casual wear companion.Featuring a durable outer rubber sole, they'll withstand anything the weather can offer.",
    initialPrice: string,
    currentPrice: string,
    thumb: string;
    image:string;
}

export const products:Iproduct[] = [
    {
        id: "1",
        company: "SNEAKER COMPANY",
        title: "Fall Limited Edition Sneakers",
        description: "This low-profile Sneakers are your perfect casual wear companion.Featuring a durable outer rubber sole, they'll withstand anything the weather can offer.",
        initialPrice: "250.00",
        currentPrice: "125.00",
        thumb: Pthumb,
        image: Pimage,
    }

];