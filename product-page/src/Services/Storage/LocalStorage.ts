import { ICart } from "../../Components/Cart/Card";

export const getCart=()=>{
    let cartItems:ICart[]=[];
    const cart=localStorage.getItem("cart");
    cart !== null ? cartItems = JSON.parse(cart):cartItems=[];
    return cartItems
}
export const removeCart=()=>{
    localStorage.removeItem("cart");
    return []
}
export const addCart=(cartItem:ICart)=>{
    
    let cartItems:ICart[]=[];
    const cart=localStorage.getItem("cart");
    if (cart !== null){
        cartItems=JSON.parse(cart);
        cartItems[0].quantity+=cartItem.quantity
        localStorage.setItem("cart",JSON.stringify(cartItems))
        return cartItems;
    } 
    else{
        cartItems.push(cartItem)
        localStorage.setItem("cart",JSON.stringify(cartItems))
        return cartItems
    }
    
    
}

