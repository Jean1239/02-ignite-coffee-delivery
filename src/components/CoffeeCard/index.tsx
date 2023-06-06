import {
	CoffeeImage,
	CoffeeName,
	CoffeeDescription,
	CoffeeCardStyled,
	CoffeeTagList,
	CoffeeCardFooter,
} from "./styles";

export type CoffeeType = {
	name: string;
	description: string;
	image_url: string;
	tags: string[];
	price: number;
};

interface CoffeeCardProps {
	coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	return (
		<CoffeeCardStyled>
			<CoffeeImage src={coffee.image_url} alt="" />
			<CoffeeTagList>
				{coffee.tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</CoffeeTagList>
			<CoffeeName>{coffee.name}</CoffeeName>
			<CoffeeDescription>{coffee.description}</CoffeeDescription>
			<CoffeeCardFooter></CoffeeCardFooter>
		</CoffeeCardStyled>
	);
}
