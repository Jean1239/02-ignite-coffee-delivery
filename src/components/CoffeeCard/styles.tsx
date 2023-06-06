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
		text-transform: uppercase;
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

export const CoffeeCardFooter = styled.footer`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.5rem 1.25rem;
`;

export const PriceContainer = styled.span`
	text-align: right;
	color: ${(props) => props.theme.colors["base-text"]};
	font-size: ${(props) => props.theme.fonts.text.s.size};
	font-weight: ${(props) => props.theme.fonts.text.s.weight};

	strong {
		font-family: ${(props) => props.theme.fonts.title.family};
		font-size: ${(props) => props.theme.fonts.title.m.size};
		font-weight: ${(props) => props.theme.fonts.title.m.weight};
	}
`;

export const QuantityAndCartButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: ${(props) => props.theme.fonts.text.m.size};
	gap: 0.25rem;
	background-color: ${(props) => props.theme.colors["base-button"]};
	border-radius: 6px;
	padding: 0.5rem;

	button {
		border: 0;
		background: transparent;
		cursor: pointer;

		color: ${(props) => props.theme.colors["brand-purple"]};

		&:hover {
			color: ${(props) => props.theme.colors["brand-purple-dark"]};
		}
	}
`;

export const AddToCartButton = styled.button`
	padding: 0.5rem;
	background-color: ${(props) => props.theme.colors["brand-purple-dark"]};
	color: ${(props) => props.theme.colors["base-card"]};
	border: 0;
	border-radius: 6px;
	line-height: 0;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.colors["brand-purple"]};
	}
`;
