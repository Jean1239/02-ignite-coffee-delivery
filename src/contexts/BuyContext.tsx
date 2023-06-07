import { ReactNode, createContext, useReducer, useState } from "react";
import {
	ShoppingCartItem,
	ShoppingCartReducer,
} from "../reducers/shoppingCart/reducer";
import { addNewItemAction } from "../reducers/shoppingCart/actions";

interface LocationType {
	city: string;
	state: string;
}

interface BuyContextType {
	shoppingCart: ShoppingCartItem[];
	location: LocationType | null;
	addItemToShoppingCart: (item: ShoppingCartItem) => void;
	setDeliveryAdress: (location: LocationType) => void;
}

export const BuyContext = createContext({} as BuyContextType);

interface BuyContextProviderProps {
	children: ReactNode;
}

export function BuyContextProvider({ children }: BuyContextProviderProps) {
	const [shoppingCart, dispatch] = useReducer(ShoppingCartReducer, []);
	const [location, setLocation] = useState<LocationType | null>(null);

	function addItemToShoppingCart(item: ShoppingCartItem) {
		dispatch(addNewItemAction(item));
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
				setDeliveryAdress,
			}}
		>
			{children}
		</BuyContext.Provider>
	);
}
