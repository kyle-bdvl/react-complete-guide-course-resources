import { legacy_createStore } from "redux";
const initialCartState = {
	cartItem: [{ title: 'Test Item', quantity: 3, price: 6 }]
}
const cartStoreReducer = (state = initialCartState, action) => {
	const itemIndex = state.cartItem.findIndex(item=> item.title === action.title);
	if (action.type === 'increment') {
		if(itemIndex === -1){
			// console.log(itemIndex);
			return {
				cartItem: [...state.cartItem, action.item],
			}
		}
		else{
			const newItem = { ...state.cartItem[itemIndex], quantity: state.cartItem[itemIndex].quantity + 1 }
			return {
				cartItem: state.cartItem.toSpliced(itemIndex, 1, newItem)
			}
		}
	}
	if (action.type === 'decrement') {
		if (state.cartItem[itemIndex].quantity === 1) {
			const newCart = state.cartItem.toSpliced(itemIndex, 1);
			return {
				cartItem: newCart,
			}
		}
		else {
			const newItem = { ...state.cartItem[itemIndex], quantity: state.cartItem[itemIndex].quantity - 1 }
			return {
				cartItem: state.cartItem.toSpliced(itemIndex, 1, newItem)
			}
		}
	}
	return state;
}
const cartStore = legacy_createStore(cartStoreReducer);
export default cartStore;