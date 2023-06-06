import { CoffeeCard, CoffeeType } from "../CoffeeCard";
import { CoffeeListHeader, CoffeeListGrid, CoffeeListFilter } from "./styles";
import expresso from "../../assets/coffees/tradicionalExpresso.svg";
import capuccino from "../../assets/coffees/capuccino.svg";
import mocaccino from "../../assets/coffees/mocaccino.svg";
import cubano from "../../assets/coffees/cubano.svg";

const coffeeList: CoffeeType[] = [
	{
		name: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
		image_url: expresso,
		tags: ["tradicional"],
		price: 9.9,
	},
	{
		name: "Capuccino",
		description:
			"Bebida com canela feita de doses iguais de café, leite e espuma",
		image_url: capuccino,
		tags: ["tradicional", "com leite"],
		price: 9.9,
	},
	{
		name: "Mocaccino",
		description:
			"Café expresso com calda de chocolate, pouco leite e espuma",
		image_url: mocaccino,
		tags: ["tradicional", "com leite"],
		price: 9.9,
	},
	{
		name: "Cubano",
		description:
			"Drink gelado de café expresso com rum, creme de leite e hortelã",
		image_url: cubano,
		tags: ["especial", "alcoólico", "gelado"],
		price: 9.9,
	},
];

export function CoffeeList() {
	return (
		<>
			<CoffeeListHeader>
				<h2>Nossos cafés</h2>
				<CoffeeListFilter>
					<span>TRADICIONAL</span>
					<span>ESPECIAL</span>
					<span>COM LEITE</span>
					<span>ALCOÓLICO</span>
					<span>GELADO</span>
				</CoffeeListFilter>
			</CoffeeListHeader>
			<CoffeeListGrid>
				{coffeeList.map((coffee) => (
					<CoffeeCard coffee={coffee} />
				))}
			</CoffeeListGrid>
		</>
	);
}
