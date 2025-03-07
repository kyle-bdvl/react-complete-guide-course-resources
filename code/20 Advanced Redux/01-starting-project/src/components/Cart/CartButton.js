import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  function handleToggleCart(){
    dispatch({type:"toggle"})
  }
  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{props.total}</span>
    </button>
  );
};

export default CartButton;
