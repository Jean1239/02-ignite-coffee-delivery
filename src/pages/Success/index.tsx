import {
	CardAndImageContainer,
	DeliveryInfoCard,
	DeliveryInfoCardRow,
	IconContainer,
	SuccessContainer,
} from "./styles";
import deliver from "../../assets/deliver.svg";
import { MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { BuyContext } from "../../contexts/BuyContext";

export function Success() {
	const { location, paymentMethod } = useContext(BuyContext);

	return (
		<SuccessContainer>
			<div>
				<h1>Uhu! Pedido confirmado</h1>
				<span>
					Agora é só aguardar que logo o café chegará até você
				</span>
			</div>
			<CardAndImageContainer>
				<DeliveryInfoCard>
					<DeliveryInfoCardRow>
						<IconContainer color="purple">
							<MapPin size={16} weight="fill" />
						</IconContainer>
						<div>
							<p>
								Entrega em{" "}
								<strong>
									{location?.street}, {location?.number}
								</strong>
							</p>
							<p>
								{location?.district} - {location?.city},{" "}
								{location?.state}
							</p>
						</div>
					</DeliveryInfoCardRow>

					<DeliveryInfoCardRow>
						<IconContainer color="yellow">
							<Timer size={16} weight="fill" />
						</IconContainer>
						<div>
							<p>Previsão de Entrega</p>
							<p>
								<strong>20 min - 30 min</strong>
							</p>
						</div>
					</DeliveryInfoCardRow>
					<DeliveryInfoCardRow>
						<IconContainer color="purple">
							<MapPin size={16} weight="fill" />
						</IconContainer>
						<div>
							<p>Pagamento na Entrega</p>
							<p>
								{paymentMethod === "creditCard" && (
									<strong>Cartão de Crédito</strong>
								)}
								{paymentMethod === "debitCard" && (
									<strong>Cartão de Débito</strong>
								)}
								{paymentMethod === "cash" && (
									<strong>Dinheiro</strong>
								)}
							</p>
						</div>
					</DeliveryInfoCardRow>
				</DeliveryInfoCard>
				<img src={deliver} />
			</CardAndImageContainer>
		</SuccessContainer>
	);
}
