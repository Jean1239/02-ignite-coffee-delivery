import { ShoppingCartItemType } from "./reducer";

export enum ActionTypes {
	"ADD_NEW_ITEM" = "ADD_NEW_ITEM",
	"INCREMENT_QUANTITY_OF_ITEM" = "INCREMENT_QUANTITY_OF_ITEM",
	"DECREMENT_QUANTITY_OF_ITEM" = "DECREMENT_QUANTITY_OF_ITEM",
	"REMOVE_ITEM" = "REMOVE_ITEM",
}

export interface ActionType {
	type: ActionTypes;
	payload: ShoppingCartItemType;
}

export function addNewItemAction(item: ShoppingCartItemType): ActionType {
	return { type: ActionTypes.ADD_NEW_ITEM, payload: item };
}

export function incrementQuantityOfItemAction(
	item: ShoppingCartItemType
): ActionType {
	return { type: ActionTypes.INCREMENT_QUANTITY_OF_ITEM, payload: item };
}

export function decrementQuantityOfItemAction(
	item: ShoppingCartItemType
): ActionType {
	return { type: ActionTypes.DECREMENT_QUANTITY_OF_ITEM, payload: item };
}

export function removeItemAction(item: ShoppingCartItemType): ActionType {
	return { type: ActionTypes.REMOVE_ITEM, payload: item };
}
