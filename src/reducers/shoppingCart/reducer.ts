import { produce } from "immer";
import { ActionTypes } from "./actions";
import { CoffeeType } from "../../components/CoffeeCard";

export interface ShoppingCartItemType {
	coffee: CoffeeType;
	quantity: number;
}

export function ShoppingCartReducer(
	state: ShoppingCartItemType[],
	action: any
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
		default:
			return state;
	}
}
