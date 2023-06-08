import styled from "styled-components";

export const CheckoutGridContainer = styled.main`
	display: grid;
	grid-template-columns: 640px 1fr;
	padding-top: 2.5rem;

	h2 {
		font-family: ${(props) => props.theme.fonts.title.family};
		color: ${(props) => props.theme.colors["base-subtitle"]};
		font-size: ${(props) => props.theme.fonts.title.xs.size};
		font-weight: ${(props) => props.theme.fonts.title.xs.weight};
	}

	@media (max-width: 645px) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled.div`
	margin-top: 1rem;
	background-color: ${(props) => props.theme.colors["base-card"]};
	padding: 2.5rem;
`;

export const CheckoutCard = styled(Card)`
	display: flex;
	margin-left: auto;
	flex-direction: column;
	gap: 1.5rem;
	border-radius: 6px 44px;
`;

export const CheckoutPriceInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const PriceContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	font-size: ${(props) => props.theme.fonts.text.s.size};
	color: ${(props) => props.theme.colors["base-text"]};

	span {
		font-size: ${(props) => props.theme.fonts.text.m.size};
	}
`;

export const TotalPriceContainer = styled(PriceContainer)`
	font-size: ${(props) => props.theme.fonts.text.l.size};
	color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const BuyButton = styled.button`
	width: 100%;
	padding: 0.75rem 0.5rem;
	border: 0;
	border-radius: 6px;
	background-color: ${(props) => props.theme.colors["brand-yellow"]};
	color: ${(props) => props.theme.colors["base-white"]};

	font-size: ${(props) => props.theme.fonts.button.g.size};
	font-weight: ${(props) => props.theme.fonts.button.g.weight};
	line-height: ${(props) => props.theme.fonts.button.g.lineHeight};
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.colors["brand-yellow-dark"]};
	}
`;
