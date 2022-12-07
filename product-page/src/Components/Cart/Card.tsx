import { Card, Button, Row, Col } from 'react-bootstrap';
import { ReactComponent as CartDelete }  from "../../img/icon-delete.svg";
import { useCart } from "./CartContext";

interface Iprops {
  hidden: boolean;
}
export interface ICart {
  id: string,
  title: string,
  price:number,
  quantity: number,
  thumb: string,
  remove?:()=>void;
}


const CartItem: React.FC<ICart> = (props: ICart) => {
  const cost=props.price*props.quantity
  return (
    <li className="list-group-item">
      <Row>
        <Col className="col-3">
          <img src={props.thumb} width={64} className="rounded-2" alt='thumbnail' />
        </Col>
        <Col className="col-9">
          <p>{props.title}</p>
          <p style={{fontSize:"10"}}>${props.price}.00 X {props.quantity} <strong>${cost}.00</strong> <button id="deleteBtn" onClick={props.remove}><CartDelete/></button></p>
          
        </Col>
      </Row>
    </li>
  );
};



function ListGroupWithHeaderExample(props: Iprops) {
  const { cartItems, removeToCart } = useCart();
  if (cartItems.length > 0) {
    return (
      <Card hidden={props.hidden} id='cartTab'>
        <Card.Header>Cart</Card.Header>
        <Card.Body>
          {cartItems.map((item: ICart) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              quantity={item.quantity}
              thumb={item.thumb}
              price={item.price}
              remove={removeToCart}
            />
            ))}
        </Card.Body>
        <Button variant="primary" id="checkoutBtn">Checkout</Button>
      </Card>
    )
  };
  return (
    <Card hidden={props.hidden} id='cartTab'>
      <Card.Header>Cart</Card.Header>
      <Card.Body>
        <div style={{margin:"auto",paddingTop:"23%", paddingBottom:"23%"}}>Your cart is empty</div>
      </Card.Body>
    </Card>
  )
}

export default ListGroupWithHeaderExample;