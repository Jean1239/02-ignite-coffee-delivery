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
	QuantityContainer,
	QuantityAndCartButtonContainer,
} from "./styles";
import { BuyContext } from "../../contexts/BuyContext";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

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
			name: coffee.name,
			pricePerUnit: coffee.price,
			quantity: quantity,
		});
		setQuantity(1);
	}

	function handleMinusClick() {
		if (quantity > 1) {
			setQuantity((state) => state - 1);
		}
	}

	function handlePlusClick() {
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
					<QuantityContainer>
						<button>
							<Minus
								size={14}
								weight="bold"
								onClick={handleMinusClick}
							/>
						</button>
						<span>{quantity}</span>
						<button>
							<Plus
								size={14}
								weight="bold"
								onClick={handlePlusClick}
							/>
						</button>
					</QuantityContainer>
					<AddToCartButton onClick={handleAddToCartClick}>
						<ShoppingCart size={22} weight="fill" />
					</AddToCartButton>
				</QuantityAndCartButtonContainer>
			</CoffeeCardFooter>
		</CoffeeCardStyled>
	);
}
