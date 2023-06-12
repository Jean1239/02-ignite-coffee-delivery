import styled from "styled-components";

export const CheckoutGridContainer = styled.main`
	display: grid;
	grid-template-columns: 640px 1fr;
	grid-column-gap: 2rem;
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
	background-color: ${(props) => props.theme.colors["base-card"]};
	padding: 2.5rem;
`;

export const AdressCard = styled(Card)`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border-radius: 6px;
`;

export const AdressCardHeader = styled.div`
	display: flex;
	gap: 0.5rem;

	span {
		font-size: ${(props) => props.theme.fonts.text.m.size};
		line-height: ${(props) => props.theme.fonts.text.m.lineHeight};
		color: ${(props) => props.theme.colors["base-subtitle"]};
	}

	p {
		font-size: ${(props) => props.theme.fonts.text.s.size};
		line-height: ${(props) => props.theme.fonts.text.s.lineHeight};
		color: ${(props) => props.theme.colors["base-text"]};
	}

	svg {
		color: ${(props) => props.theme.colors["brand-yellow-dark"]};
	}
`;

export const AdressForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
export const PaymentCard = styled(Card)`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	gap: 2rem;
`;

export const PaymentCardHeader = styled.div`
	display: flex;
	gap: 0.5rem;

	span {
		font-size: ${(props) => props.theme.fonts.text.m.size};
		line-height: ${(props) => props.theme.fonts.text.m.lineHeight};
		color: ${(props) => props.theme.colors["base-subtitle"]};
	}

	p {
		font-size: ${(props) => props.theme.fonts.text.s.size};
		line-height: ${(props) => props.theme.fonts.text.s.lineHeight};
		color: ${(props) => props.theme.colors["base-text"]};
	}

	svg {
		color: ${(props) => props.theme.colors["brand-purple"]};
	}
`;

export const PaymentButtonsContainer = styled.button`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 0.75rem;
	border: 0;
	background-color: inherit;

	button {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		border: 1px solid transparent;

		font-size: ${(props) => props.theme.fonts.text.xs.size};
		color: ${(props) => props.theme.colors["base-text"]};
		background-color: ${(props) => props.theme.colors["base-button"]};
		border-radius: 6px;
		padding: 1rem;

		cursor: pointer;

		&:hover {
			background-color: ${(props) => props.theme.colors["base-hover"]};
			color: ${(props) => props.theme.colors["base-subtitle"]};
		}

		svg {
			color: ${(props) => props.theme.colors["brand-purple"]};
		}

		&.selected {
			border-color: ${(props) => props.theme.colors["brand-purple"]};
			background-color: ${(props) =>
				props.theme.colors["brand-purple-light"]};
		}
	}
`;

export const CheckoutCard = styled(Card)`
	margin-top: 1rem;
	display: flex;
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
