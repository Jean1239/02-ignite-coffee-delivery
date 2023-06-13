import { useContext } from "react";
import {
	AdressCard,
	AdressCardHeader,
	AdressForm,
	BuyButton,
	CheckoutCard,
	CheckoutGridContainer,
	CheckoutPriceInfo,
	FormGroup,
	Input,
	PaymentButtonItem,
	PaymentButtonsContainer,
	PaymentCard,
	PaymentCardHeader,
	PriceContainer,
	TotalPriceContainer,
} from "./styles";
import { BuyContext, LocationType } from "../../contexts/BuyContext";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";
import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from "@phosphor-icons/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const CheckoutFormSchema = z.object({
	addressStreet: z.string(),
	addressNumber: z.number(),
	addressDistrict: z.string(),
	addressCity: z.string(),
	addressState: z.string(),
	paymentMethod: z.enum(["creditCard", "debitCard", "cash"]),
});

type CheckoutFormInputs = z.infer<typeof CheckoutFormSchema>;

export function Checkout() {
	const { shoppingCart, setLocation, setPaymentMethod, clearShoppingCart } =
		useContext(BuyContext);
	const { control, register, handleSubmit } = useForm<CheckoutFormInputs>({
		resolver: zodResolver(CheckoutFormSchema),
	});

	const totalItensPrice = shoppingCart.reduce((acc, elem) => {
		return acc + elem.coffee.price * elem.quantity;
	}, 0);
	const deliveryPrice = 3.5;
	const totalPrice = totalItensPrice + deliveryPrice;

	function finishCheckout(values: CheckoutFormInputs) {
		const location: LocationType = {
			city: values.addressCity,
			district: values.addressState,
			number: values.addressNumber,
			state: values.addressState,
			street: values.addressStreet,
		};

		setLocation(location);
		setPaymentMethod(values.paymentMethod);
		clearShoppingCart();
	}

	return (
		<form onSubmit={handleSubmit(finishCheckout)}>
			<CheckoutGridContainer>
				<div>
					<h2>Complete seu pedido</h2>
					<AdressCard>
						<AdressCardHeader>
							<MapPinLine size={22} />
							<div>
								<span>Endereço de Entrega</span>
								<p>
									Informe o endereço onde deseja receber o
									pedido
								</p>
							</div>
						</AdressCardHeader>
						<AdressForm>
							<Input type="text" placeholder="CEP" variant="md" />
							<Input
								type="text"
								placeholder="Rua"
								variant="lg"
								required
								{...register("addressStreet")}
							/>
							<FormGroup>
								<Input
									type="number"
									placeholder="Número"
									variant="md"
									min={1}
									required
									{...register("addressNumber", {
										valueAsNumber: true,
									})}
								/>
								<Input
									type="text"
									placeholder="Complemento"
									variant="lg"
								/>
							</FormGroup>
							<FormGroup>
								<Input
									type="text"
									placeholder="Bairro"
									variant="md"
									required
									{...register("addressDistrict")}
								/>
								<Input
									type="text"
									placeholder="Cidade"
									variant="lg"
									required
									{...register("addressCity")}
								/>
								<Input
									type="text"
									placeholder="UF"
									variant="sm"
									required
									{...register("addressState")}
								/>
							</FormGroup>
						</AdressForm>
					</AdressCard>
					<PaymentCard>
						<PaymentCardHeader>
							<CurrencyDollar size={22} />
							<div>
								<span>Pagamento</span>
								<p>
									O pagamento é feito na entrega. Escolha a
									forma que deseja pagar
								</p>
							</div>
						</PaymentCardHeader>

						<Controller
							name="paymentMethod"
							control={control}
							render={({ field }) => {
								return (
									<PaymentButtonsContainer
										onValueChange={field.onChange}
									>
										<PaymentButtonItem value="creditCard">
											<CreditCard size={16} />
											CARTÃO DE CRÉDITO
										</PaymentButtonItem>
										<PaymentButtonItem value="debitCard">
											<Bank size={16} />
											CARTÃO DE DÉBITO
										</PaymentButtonItem>
										<PaymentButtonItem value="cash">
											<Money size={16} />
											DINHEIRO
										</PaymentButtonItem>
									</PaymentButtonsContainer>
								);
							}}
						/>
					</PaymentCard>
				</div>
				<div>
					<h2>Cafés Selecionados</h2>
					<CheckoutCard>
						{shoppingCart.map((item) => (
							<ShoppingCartItem
								key={item.coffee.name}
								item={item}
							/>
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
						<BuyButton type="submit">CONFIRMAR PEDIDO</BuyButton>
					</CheckoutCard>
				</div>
			</CheckoutGridContainer>
		</form>
	);
}
