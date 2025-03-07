import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useSelector } from 'react-redux';
const MainHeader = (props) => {
  const cartItem = useSelector(state=>state.cartItem)
  let counter =0;
  cartItem.map((item)=>{
    counter = counter + item.quantity
  })
  return (
    
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton total={counter} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;


// const array = [3,4,4,5,5,5]
//array [1]= 4 array[1] [2]