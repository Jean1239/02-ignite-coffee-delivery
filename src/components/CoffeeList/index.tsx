/* eslint-disable no-mixed-spaces-and-tabs */
import { CoffeeCard, CoffeeType } from "../CoffeeCard";
import { CoffeeListHeader, CoffeeListGrid, CoffeeListFilter } from "./styles";
import expresso from "../../assets/coffees/tradicionalExpresso.svg";
import capuccino from "../../assets/coffees/capuccino.svg";
import mocaccino from "../../assets/coffees/mocaccino.svg";
import cubano from "../../assets/coffees/cubano.svg";
import { useState, MouseEvent } from "react";
import { produce } from "immer";

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

const tags = ["tradicional", "especial", "com leite", "alcoólico", "gelado"];

export function CoffeeList() {
	const [filterTags, setFilterTags] = useState([] as string[]);

	let filteredCoffeeList = null;
	if (filterTags.length > 0) {
		filteredCoffeeList = coffeeList.filter((coffe) => {
			const hasAllTags = filterTags.every((tag) =>
				coffe.tags.includes(tag)
			);
			if (hasAllTags) {
				return true;
			}
			return false;
		});
	}

	function HandleOnClickTag(event: MouseEvent) {
		const tag = event.currentTarget.innerHTML as string;
		setFilterTags(
			produce(filterTags, (draft) => {
				const hasTag = draft.includes(tag);
				if (hasTag) {
					draft = draft.filter((value) => value != tag);
				} else {
					draft.push(tag);
				}
				return draft;
			})
		);
	}

	return (
		<>
			<CoffeeListHeader>
				<h2>Nossos cafés</h2>
				<CoffeeListFilter>
					{tags.map((tag) => (
						<button
							className={
								filterTags.includes(tag) ? "selectedTag" : ""
							}
							onClick={HandleOnClickTag}
							key={tag}
						>
							{tag}
						</button>
					))}
				</CoffeeListFilter>
			</CoffeeListHeader>
			<CoffeeListGrid>
				{filteredCoffeeList
					? filteredCoffeeList.map((coffee) => (
							<CoffeeCard key={coffee.name} coffee={coffee} />
					  ))
					: coffeeList.map((coffee) => (
							<CoffeeCard key={coffee.name} coffee={coffee} />
					  ))}
			</CoffeeListGrid>
		</>
	);
}
