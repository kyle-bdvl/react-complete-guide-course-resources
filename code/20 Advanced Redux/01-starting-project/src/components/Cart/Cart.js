import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const cartItem = useSelector(state=>state.cartItem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItem.map((item,index)=>{
            const total = item.quantity * item.price;
            return(
              <CartItem key={index} item={{...item,total}}/>
            )
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
