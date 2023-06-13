import { ReactNode, createContext, useReducer, useState } from "react";
import {
	ShoppingCartItemType,
	ShoppingCartReducer,
} from "../reducers/shoppingCart/reducer";
import {
	addNewItemAction,
	decrementQuantityOfItemAction,
	incrementQuantityOfItemAction,
	removeItemAction,
} from "../reducers/shoppingCart/actions";

interface LocationType {
	city: string;
	state: string;
}

export type PaymentMethod = "creditCard" | "debitCard" | "cash";

interface BuyContextType {
	shoppingCart: ShoppingCartItemType[];
	location: LocationType | null;
	addItemToShoppingCart: (item: ShoppingCartItemType) => void;
	incrementQuantityOfItem: (item: ShoppingCartItemType) => void;
	decrementQuantityOfItem: (item: ShoppingCartItemType) => void;
	removeItem: (item: ShoppingCartItemType) => void;
	setDeliveryAdress: (location: LocationType) => void;
}

export const BuyContext = createContext({} as BuyContextType);

interface BuyContextProviderProps {
	children: ReactNode;
}

export function BuyContextProvider({ children }: BuyContextProviderProps) {
	const [shoppingCart, dispatch] = useReducer(ShoppingCartReducer, []);
	const [location, setLocation] = useState<LocationType | null>(null);

	function addItemToShoppingCart(item: ShoppingCartItemType) {
		dispatch(addNewItemAction(item));
	}

	function incrementQuantityOfItem(item: ShoppingCartItemType) {
		dispatch(incrementQuantityOfItemAction(item));
	}

	function decrementQuantityOfItem(item: ShoppingCartItemType) {
		dispatch(decrementQuantityOfItemAction(item));
	}

	function removeItem(item: ShoppingCartItemType) {
		dispatch(removeItemAction(item));
	}

	function setDeliveryAdress(location: LocationType) {
		setLocation(location);
	}

	return (
		<BuyContext.Provider
			value={{
				shoppingCart,
				location,
				addItemToShoppingCart,
				incrementQuantityOfItem,
				decrementQuantityOfItem,
				removeItem,
				setDeliveryAdress,
			}}
		>
			{children}
		</BuyContext.Provider>
	);
}
