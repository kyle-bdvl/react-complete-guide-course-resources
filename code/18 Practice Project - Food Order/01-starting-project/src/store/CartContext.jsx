//its all about spreading data to components
import { createContext, useReducer } from 'react';
//interface for the cartContext
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    // state.items.push(action.item); -> this is not a good idea. Because it mutates the state
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    //copied array (immutable update of state)
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex]
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      }
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    //state.items =>  items= [{...props, quantity:},{...}]
    return {...state,items:updatedItems};
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.item.findIndex((item) => item.id = action.id);
    const existingCartItem = state.item[existingCartItemIndex];
    const updatedItems = [...state.items];
    
    if(existingCartItem===1){
      updatedItems.splice(existingCartItemIndex,1);
    }else { 
      const updatedItem={
        ...existingCartItem,
        quantity: existingCartItem.quantity -1,
      };f
      updatedItems[existingCartItemIndex]= updatedItem;
    }
    return {...state,items:updatedItems};
  }

  return state;
}

export function CartContextProvider({ children }) {
  //state logic to manage the items 
  const [cart ,dispatchCartAction]= useReducer(cartReducer, { items: [] });
  const cartContext = { 
    items:cart.items, 
    addItem:addItem,
    removeItem:removeItem
  };
  //this will get rendered twice because of the StrictMode haha
  console.log(cartContext);


  function addItem(item){
    dispatchCartAction({type: 'ADD_ITEM',item:item})
  }

  function removeItem(id){
    dispatchCartAction({type:'REMOVE_ITEM', id:id})
  }

  return (
    <CartContext value={cartContext}>{children}</CartContext>
  );
}

export default CartContext;