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
import { Link } from "react-router-dom";

export function Header() {
	const { shoppingCart } = useContext(BuyContext);
	const { location } = useContext(BuyContext);
	const amount = shoppingCart.reduce(
		(acc, item) => (acc += item.quantity),
		0
	);

	return (
		<HeaderContainer>
			<NavContainer>
				<Link to={"/"}>
					<img src={logo} alt="" />
				</Link>
				<LocationAndCartContainer>
					{location && (
						<LocationContainer>
							<MapPin size={22} weight="fill" />{" "}
							{`${location.city}, ${location.state}`}
						</LocationContainer>
					)}
					<ShoppingCartContainer to={"/checkout"}>
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
