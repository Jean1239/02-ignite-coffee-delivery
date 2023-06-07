import { produce } from "immer";
import { ActionType, ActionTypes } from "./actions";
import { CoffeeType } from "../../components/CoffeeCard";

export interface ShoppingCartItemType {
	coffee: CoffeeType;
	quantity: number;
}

export function ShoppingCartReducer(
	state: ShoppingCartItemType[],
	action: ActionType
) {
	switch (action.type) {
		case ActionTypes.ADD_NEW_ITEM:
			return produce(state, (draft) => {
				const oldItem = draft.find(
					(shoppingItem) =>
						shoppingItem.coffee.name === action.payload.coffee.name
				);
				if (oldItem) {
					oldItem.quantity += action.payload.quantity;
					return draft;
				}
				return [...draft, action.payload];
			});
		case ActionTypes.INCREMENT_QUANTITY_OF_ITEM:
			return produce(state, (draft) => {
				const item = draft.find(
					(shoppingItem) =>
						shoppingItem.coffee.name === action.payload.coffee.name
				);
				if (item) {
					item.quantity++;
				}
				return draft;
			});
		case ActionTypes.DECREMENT_QUANTITY_OF_ITEM:
			return produce(state, (draft) => {
				const item = draft.find(
					(shoppingItem) =>
						shoppingItem.coffee.name === action.payload.coffee.name
				);
				if (item && item.quantity > 1) {
					item.quantity--;
				}
				return draft;
			});
		case ActionTypes.REMOVE_ITEM:
			return produce(state, (draft) => {
				return draft.filter(
					(elem) => elem.coffee.name !== action.payload.coffee.name
				);
			});
		default:
			return state;
	}
}
