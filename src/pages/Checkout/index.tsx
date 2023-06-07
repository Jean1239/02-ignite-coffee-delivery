import { useContext } from "react";
import {
	BuyButton,
	CheckoutCard,
	CheckoutGridContainer,
	CheckoutPriceInfo,
	PriceContainer,
	TotalPriceContainer,
} from "./styles";
import { BuyContext } from "../../contexts/BuyContext";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";

export function Checkout() {
	const { shoppingCart } = useContext(BuyContext);
	const totalItensPrice = shoppingCart.reduce((acc, elem) => {
		return acc + elem.coffee.price * elem.quantity;
	}, 0);
	const deliveryPrice = 3.5;
	const totalPrice = totalItensPrice + deliveryPrice;

	return (
		<CheckoutGridContainer>
			<div>
				<h2>Complete seu pedido</h2>
			</div>
			<div>
				<h2>Cafés Selecionados</h2>
				<CheckoutCard>
					{shoppingCart.map((item) => (
						<ShoppingCartItem item={item} />
					))}
					<CheckoutPriceInfo>
						<PriceContainer>
							Total de itens
							<span>
								{Intl.NumberFormat("pt-br", {
									style: "currency",
									currency: "BRL",
								}).format(totalItensPrice)}
							</span>
						</PriceContainer>
						<PriceContainer>
							Entrega
							<span>
								{Intl.NumberFormat("pt-br", {
									style: "currency",
									currency: "BRL",
								}).format(deliveryPrice)}
							</span>
						</PriceContainer>
						<TotalPriceContainer>
							<strong>Total</strong>
							<strong>
								{Intl.NumberFormat("pt-br", {
									style: "currency",
									currency: "BRL",
								}).format(totalPrice)}
							</strong>
						</TotalPriceContainer>
					</CheckoutPriceInfo>
					<BuyButton>CONFIRMAR PEDIDO</BuyButton>
				</CheckoutCard>
			</div>
		</CheckoutGridContainer>
	);
}
