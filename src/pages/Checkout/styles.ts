import styled from "styled-components";

export const CheckoutGridContainer = styled.main`
	display: grid;
	grid-template-columns: 640px 448px;
	padding-top: 2.5rem;

	h2 {
		font-family: ${(props) => props.theme.fonts.title.family};
		color: ${(props) => props.theme.colors["base-subtitle"]};
		font-size: ${(props) => props.theme.fonts.title.xs.size};
		font-weight: ${(props) => props.theme.fonts.title.xs.weight};
	}
`;

const Card = styled.div`
	background-color: ${(props) => props.theme.colors["base-card"]};
	padding: 2.5rem;
`;

export const CheckoutCard = styled(Card)`
	border-radius: 6px 44px;
`;
