import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import {
	LocationAndCartContainer,
	NavContainer,
	LocationSpanContainer,
	CartSpanContainer,
	HeaderContainer,
} from "./styles";

export function Header() {
	return (
		<HeaderContainer>
			<NavContainer>
				<img src={logo} alt="" />
				<LocationAndCartContainer>
					<LocationSpanContainer>
						<MapPin size={22} weight="fill" color="#8047F8" /> Porto
						Alegre, RS
					</LocationSpanContainer>
					<CartSpanContainer>
						<ShoppingCart size={22} weight="fill" />
					</CartSpanContainer>
				</LocationAndCartContainer>
			</NavContainer>
		</HeaderContainer>
	);
}
