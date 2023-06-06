import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import {
	LocationAndCartContainer,
	NavContainer,
	LocationContainer,
	ShoppingCartContainer,
	HeaderContainer,
	AmountContainer,
} from "./styles";
import { useContext } from "react";
import { BuyContext } from "../../contexts/BuyContext";

export function Header() {
	const { shoppingCart } = useContext(BuyContext);
	const amount = shoppingCart.reduce(
		(acc, item) => (acc += item.quantity),
		0
	);

	return (
		<HeaderContainer>
			<NavContainer>
				<img src={logo} alt="" />
				<LocationAndCartContainer>
					<LocationContainer>
						<MapPin size={22} weight="fill" color="#8047F8" /> Porto
						Alegre, RS
					</LocationContainer>
					<ShoppingCartContainer>
						{amount != 0 && (
							<AmountContainer>{amount}</AmountContainer>
						)}
						<ShoppingCart size={22} weight="fill" />
					</ShoppingCartContainer>
				</LocationAndCartContainer>
			</NavContainer>
		</HeaderContainer>
	);
}
