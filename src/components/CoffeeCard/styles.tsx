import styled from "styled-components";

export const CoffeeCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors["base-card"]};
	border-radius: 6px 36px;
`;

export const CoffeeImage = styled.img`
	position: relative;
	top: -20px;
`;

export const CoffeeTagList = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	gap: 0.25rem;

	span {
		border-radius: 100px;
		padding: 0.25rem 0.5rem;
		background-color: ${(props) =>
			props.theme.colors["brand-yellow-light"]};
		color: ${(props) => props.theme.colors["brand-yellow-dark"]};

		font-size: ${(props) => props.theme.fonts.tag.size};
		font-weight: ${(props) => props.theme.fonts.tag.weight};
	}
`;

export const CoffeeName = styled.strong`
	font-family: ${(props) => props.theme.fonts.title.family};
	font-size: ${(props) => props.theme.fonts.title.s.size};
	font-weight: ${(props) => props.theme.fonts.title.s.weight};
	padding: 1.25rem;
`;

export const CoffeeDescription = styled.span`
	padding: 0 1.25rem 2.0625rem;
	color: ${(props) => props.theme.colors["base-label"]};
	font-size: ${(props) => props.theme.fonts.text.s.size};
	color: ${(props) => props.theme.colors["base-label"]};
	text-align: center;
`;
