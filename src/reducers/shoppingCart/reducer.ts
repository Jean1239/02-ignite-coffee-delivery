import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface ShoppingCartItem {
	name: string;
	quantity: number;
	pricePerUnit: number;
}

export function ShoppingCartReducer(state: ShoppingCartItem[], action: any) {
	switch (action.type) {
		case ActionTypes.ADD_NEW_ITEM:
			return produce(state, (draft) => {
				const oldItem = draft.find(
					(shoppingItem) => shoppingItem.name === action.payload.name
				);
				if (oldItem) {
					oldItem.quantity += action.payload.quantity;
					return draft;
				}
				return [...draft, action.payload];
			});
		default:
			return state;
	}
}
