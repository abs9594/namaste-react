import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems.map((item) => <h1 key={item}>{item}</h1>);
};

export default Cart;
