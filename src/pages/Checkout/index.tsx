import { useContext } from "react";
import { CheckoutCard, CheckoutGridContainer } from "./styles";
import { BuyContext } from "../../contexts/BuyContext";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";

export function Checkout() {
	const { shoppingCart } = useContext(BuyContext);

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
				</CheckoutCard>
			</div>
		</CheckoutGridContainer>
	);
}
