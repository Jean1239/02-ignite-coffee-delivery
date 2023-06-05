import {
	CoffeeImage,
	CoffeeName,
	CoffeeDescription,
	CoffeeCardStyled,
	CoffeeTagList,
} from "./styles";
import coffeeImage from "../../assets/coffees/coffee.svg";

export function CoffeeCard() {
	return (
		<CoffeeCardStyled>
			<CoffeeImage src={coffeeImage} alt="" />
			<CoffeeTagList>
				<span>ESPECIAL</span>
				<span>ALCOÓLICO</span>
				<span>GELADO</span>
			</CoffeeTagList>
			<CoffeeName>Expresso Tradicional</CoffeeName>
			<CoffeeDescription>
				O tradicional café feito com água quente e grãos moídos
			</CoffeeDescription>
		</CoffeeCardStyled>
	);
}
