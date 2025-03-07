import { legacy_createStore } from "redux";
const initialCartState = {
	cartItem: [{ title: 'Test Item', quantity: 3, price: 6 }], 
  cartIsOpen:false,
}
const cartStoreReducer = (state = initialCartState, action) => {
	const itemIndex = state.cartItem.findIndex(item=> item.title === action.title);
	if (action.type === 'increment') {
		if(itemIndex === -1){
			// console.log(itemIndex);
			return {
				cartItem: [...state.cartItem, action.item],
        cartIsOpen:state.cartIsOpen
			}
		}
		else{
			const newItem = { ...state.cartItem[itemIndex], quantity: state.cartItem[itemIndex].quantity + 1 }
			return {
				cartItem: state.cartItem.toSpliced(itemIndex, 1, newItem),
        cartIsOpen:state.cartIsOpen
			}
		}
	}
	if (action.type === 'decrement') {
		if (state.cartItem[itemIndex].quantity === 1) {
			const newCart = state.cartItem.toSpliced(itemIndex, 1);
			return {
				cartItem: newCart,
        cartIsOpen:state.cartIsOpen
			}
		}
		else {
			const newItem = { ...state.cartItem[itemIndex], quantity: state.cartItem[itemIndex].quantity - 1 }
			return {
				cartItem: state.cartItem.toSpliced(itemIndex, 1, newItem),
        cartIsOpen:state.cartIsOpen
			}
		}
	}

  if (action.type ==='toggle'){
    return{
      cartItem:[...state.cartItem],
      cartIsOpen: !state.cartIsOpen
    }
  }
	return (state);
}
const cartStore = legacy_createStore(cartStoreReducer);
export default cartStore;