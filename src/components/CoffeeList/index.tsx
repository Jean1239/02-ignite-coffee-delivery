import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListHeader, CoffeeListGrid, CoffeeListFilter } from "./styles";

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
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
			</CoffeeListGrid>
		</>
	);
}
