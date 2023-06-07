import { useContext, useState } from "react";
import { ShoppingCartItemType } from "../../reducers/shoppingCart/reducer";
import { QuantityCounter } from "../QuantityCounter";
import {
	ActionsContainer,
	InfoContainer,
	ItemContainer,
	PriceContainer,
	RemoveButton,
	ShoppingCartItemContainer,
} from "./styles";
import { Trash } from "@phosphor-icons/react";
import { BuyContext } from "../../contexts/BuyContext";

interface ShoppingCartItemProps {
	item: ShoppingCartItemType;
}

export function ShoppingCartItem({ item }: ShoppingCartItemProps) {
	const { incrementQuantityOfItem, decrementQuantityOfItem, removeItem } =
		useContext(BuyContext);
	const [quantity, setQuantity] = useState(item.quantity);

	function incrementQuantity() {
		setQuantity((state) => state + 1);
		incrementQuantityOfItem(item);
	}

	function decrementQuantity() {
		if (quantity > 1) {
			setQuantity((state) => state - 1);
			decrementQuantityOfItem(item);
		}
	}

	function handleRemoveClick() {
		removeItem(item);
	}

	const totalPrice = item.coffee.price * item.quantity;

	return (
		<ShoppingCartItemContainer key={item.coffee.name}>
			<ItemContainer>
				<img src={item.coffee.image_url} alt="" />
				<InfoContainer>
					<span>{item.coffee.name}</span>
					<ActionsContainer>
						<QuantityCounter
							quantity={quantity}
							incrementQuantity={incrementQuantity}
							decrementQuantity={decrementQuantity}
						/>
						<RemoveButton onClick={handleRemoveClick}>
							<Trash size={16} />
							REMOVER
						</RemoveButton>
					</ActionsContainer>
				</InfoContainer>
			</ItemContainer>
			<PriceContainer>
				{Intl.NumberFormat("pt-br", {
					style: "currency",
					currency: "BRL",
				}).format(totalPrice)}
			</PriceContainer>
		</ShoppingCartItemContainer>
	);
}
