import { ReactNode, createContext, useReducer, useState } from "react";
import {
	ShoppingCartItemType,
	ShoppingCartReducer,
} from "../reducers/shoppingCart/reducer";
import {
	addNewItemAction,
	clearShoppingCartAction,
	decrementQuantityOfItemAction,
	incrementQuantityOfItemAction,
	removeItemAction,
} from "../reducers/shoppingCart/actions";

export interface LocationType {
	cep: string;
	street: string;
	number: number;
	complement?: string;
	district: string;
	city: string;
	state: string;
}

type PaymentMethodType = "creditCard" | "debitCard" | "cash";

interface BuyContextType {
	shoppingCart: ShoppingCartItemType[];
	location: LocationType | null;
	paymentMethod: PaymentMethodType | null;
	addItemToShoppingCart: (item: ShoppingCartItemType) => void;
	incrementQuantityOfItem: (item: ShoppingCartItemType) => void;
	decrementQuantityOfItem: (item: ShoppingCartItemType) => void;
	removeItem: (item: ShoppingCartItemType) => void;
	setLocation: (location: LocationType) => void;
	setPaymentMethod: (paymentMethod: PaymentMethodType) => void;
	clearShoppingCart: () => void;
}

export const BuyContext = createContext({} as BuyContextType);

interface BuyContextProviderProps {
	children: ReactNode;
}

export function BuyContextProvider({ children }: BuyContextProviderProps) {
	const [shoppingCart, dispatch] = useReducer(ShoppingCartReducer, []);
	const [location, setLocation] = useState<LocationType | null>(null);
	const [paymentMethod, setPaymentMethod] =
		useState<PaymentMethodType | null>(null);

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

	function clearShoppingCart() {
		dispatch(clearShoppingCartAction());
	}

	return (
		<BuyContext.Provider
			value={{
				shoppingCart,
				location,
				paymentMethod,
				addItemToShoppingCart,
				incrementQuantityOfItem,
				decrementQuantityOfItem,
				clearShoppingCart,
				removeItem,
				setLocation,
				setPaymentMethod,
			}}
		>
			{children}
		</BuyContext.Provider>
	);
}
