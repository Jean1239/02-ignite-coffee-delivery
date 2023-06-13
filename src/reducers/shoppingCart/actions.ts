import { ShoppingCartItemType } from "./reducer";

export enum ActionTypes {
	"ADD_NEW_ITEM" = "ADD_NEW_ITEM",
	"INCREMENT_QUANTITY_OF_ITEM" = "INCREMENT_QUANTITY_OF_ITEM",
	"DECREMENT_QUANTITY_OF_ITEM" = "DECREMENT_QUANTITY_OF_ITEM",
	"REMOVE_ITEM" = "REMOVE_ITEM",
	"CLEAR_SHOPPING_CART" = "CLEAR_SHOPPING_CART",
}

export function addNewItemAction(item: ShoppingCartItemType) {
	return { type: ActionTypes.ADD_NEW_ITEM, payload: item };
}

export function incrementQuantityOfItemAction(item: ShoppingCartItemType) {
	return { type: ActionTypes.INCREMENT_QUANTITY_OF_ITEM, payload: item };
}

export function decrementQuantityOfItemAction(item: ShoppingCartItemType) {
	return { type: ActionTypes.DECREMENT_QUANTITY_OF_ITEM, payload: item };
}

export function removeItemAction(item: ShoppingCartItemType) {
	return { type: ActionTypes.REMOVE_ITEM, payload: item };
}

export function clearShoppingCartAction() {
	return { type: ActionTypes.CLEAR_SHOPPING_CART, payload: null };
}
