import { Card, Button, Row, Col } from 'react-bootstrap';
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
          <p>{props.price}X{props.quantity}={cost}</p>
          <Button onClick={props.remove}>Delete</Button>
        </Col>
      </Row>
    </li>
  );
};



function ListGroupWithHeaderExample(props: Iprops) {
  const { cartItems, removeCart } = useCart();
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
              remove={removeCart}
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
      <Card.Body>Your cart is Empty</Card.Body>
    </Card>
  )
}

export default ListGroupWithHeaderExample;