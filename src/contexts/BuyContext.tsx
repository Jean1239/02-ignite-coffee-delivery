import { ReactNode, createContext, useReducer } from "react";
import {
	ShoppingCartItem,
	ShoppingCartReducer,
} from "../reducers/shoppingCart/reducer";
import { addNewItemAction } from "../reducers/shoppingCart/actions";

interface BuyContextType {
	shoppingCart: ShoppingCartItem[];
	addItemToShoppingCart: (item: ShoppingCartItem) => void;
}

export const BuyContext = createContext({} as BuyContextType);

interface BuyContextProviderProps {
	children: ReactNode;
}

export function BuyContextProvider({ children }: BuyContextProviderProps) {
	const [shoppingCart, dispatch] = useReducer(ShoppingCartReducer, []);

	function addItemToShoppingCart(item: ShoppingCartItem) {
		dispatch(addNewItemAction(item));
	}

	return (
		<BuyContext.Provider value={{ shoppingCart, addItemToShoppingCart }}>
			{children}
		</BuyContext.Provider>
	);
}
