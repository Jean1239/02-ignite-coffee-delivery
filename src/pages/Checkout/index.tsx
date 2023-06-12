import { useContext } from "react";
import {
	AdressCard,
	AdressCardHeader,
	AdressForm,
	BuyButton,
	CheckoutCard,
	CheckoutGridContainer,
	CheckoutPriceInfo,
	PaymentCard,
	PriceContainer,
	TotalPriceContainer,
} from "./styles";
import { BuyContext } from "../../contexts/BuyContext";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";
import { MapPinLine } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { FormGroup } from "../../components/Input/styles";

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
				<AdressCard>
					<AdressCardHeader>
						<MapPinLine size={22} />
						<div>
							<span>Endereço de Entrega</span>
							<p>
								Informe o endereço onde deseja receber o pedido
							</p>
						</div>
					</AdressCardHeader>
					<AdressForm>
						<Input type="text" placeholder="CEP" variant="md" />
						<Input type="text" placeholder="Rua" />
						<FormGroup>
							<Input
								type="number"
								placeholder="Número"
								variant="md"
							/>
							<Input type="text" placeholder="Complemento" />
						</FormGroup>
						<FormGroup>
							<Input
								type="text"
								placeholder="Bairro"
								variant="md"
							/>
							<Input type="text" placeholder="Cidade" />
							<Input type="text" placeholder="UF" variant="sm" />
						</FormGroup>
					</AdressForm>
				</AdressCard>
				<PaymentCard></PaymentCard>
			</div>
			<div>
				<h2>Cafés Selecionados</h2>
				<CheckoutCard>
					{shoppingCart.map((item) => (
						<ShoppingCartItem key={item.coffee.name} item={item} />
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
