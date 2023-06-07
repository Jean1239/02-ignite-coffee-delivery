import {
	IntroContainer,
	IntroItemIcon,
	IntroItem,
	IntroItemColumn,
	IntroItens,
	IntroLeftColumn,
	IntroText,
	IntroImageContainer,
} from "./styles";
import introImage from "../../assets/introImage.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeList } from "../../components/CoffeeList";

export function Home() {
	return (
		<>
			<IntroContainer>
				<IntroLeftColumn>
					<IntroText>
						<h1>
							Encontre o café perfeito para qualquer hora do dia
						</h1>
						<p>
							Com o Coffee Delivery você recebe seu café onde
							estiver, a qualquer hora
						</p>
					</IntroText>
					<IntroItens>
						<IntroItemColumn>
							<IntroItem>
								<IntroItemIcon variant="yellow-dark">
									<ShoppingCart size={16} weight="fill" />
								</IntroItemIcon>
								<span>Compra simples e segura</span>
							</IntroItem>
							<IntroItem>
								<IntroItemIcon variant="yellow">
									<Timer size={16} weight="fill" />
								</IntroItemIcon>
								<span>Entrega rápida e rastreada</span>
							</IntroItem>
						</IntroItemColumn>
						<IntroItemColumn>
							<IntroItem>
								<IntroItemIcon variant="gray">
									<Package size={16} weight="fill" />
								</IntroItemIcon>
								<span>Embalagem mantém o café intacto</span>
							</IntroItem>
							<IntroItem>
								<IntroItemIcon variant="purple">
									<Coffee size={16} weight="fill" />
								</IntroItemIcon>
								<span>O café chega fresquinho até você</span>
							</IntroItem>
						</IntroItemColumn>
					</IntroItens>
				</IntroLeftColumn>
				<IntroImageContainer>
					<img src={introImage} alt="" />
				</IntroImageContainer>
			</IntroContainer>
			<main>
				<CoffeeList />
			</main>
		</>
	);
}
