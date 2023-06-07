import { useContext, useState } from "react";
import {
	CoffeeImage,
	CoffeeName,
	CoffeeDescription,
	CoffeeCardStyled,
	CoffeeTagList,
	CoffeeCardFooter,
	AddToCartButton,
	PriceContainer,
	QuantityAndCartButtonContainer,
} from "./styles";
import { BuyContext } from "../../contexts/BuyContext";
import { ShoppingCart } from "@phosphor-icons/react";
import { QuantityCounter } from "../QuantityCounter";

export type CoffeeType = {
	name: string;
	description: string;
	image_url: string;
	tags: string[];
	price: number;
};

interface CoffeeCardProps {
	coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	const { addItemToShoppingCart } = useContext(BuyContext);
	const [quantity, setQuantity] = useState(1);

	function handleAddToCartClick() {
		addItemToShoppingCart({
			coffee: coffee,
			quantity: quantity,
		});
		setQuantity(1);
	}

	function decrementQuantity() {
		if (quantity > 1) {
			setQuantity((state) => state - 1);
		}
	}

	function incrementQuantity() {
		setQuantity((state) => state + 1);
	}

	const priceFormatted = Intl.NumberFormat("pt-br", {
		style: "decimal",
		minimumFractionDigits: 2,
	}).format(coffee.price);

	return (
		<CoffeeCardStyled>
			<CoffeeImage src={coffee.image_url} alt="" />
			<CoffeeTagList>
				{coffee.tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</CoffeeTagList>
			<CoffeeName>{coffee.name}</CoffeeName>
			<CoffeeDescription>{coffee.description}</CoffeeDescription>
			<CoffeeCardFooter>
				<PriceContainer>
					R$ <strong>{priceFormatted}</strong>
				</PriceContainer>
				<QuantityAndCartButtonContainer>
					<QuantityCounter
						quantity={quantity}
						incrementQuantity={incrementQuantity}
						decrementQuantity={decrementQuantity}
					/>
					<AddToCartButton onClick={handleAddToCartClick}>
						<ShoppingCart size={22} weight="fill" />
					</AddToCartButton>
				</QuantityAndCartButtonContainer>
			</CoffeeCardFooter>
		</CoffeeCardStyled>
	);
}
