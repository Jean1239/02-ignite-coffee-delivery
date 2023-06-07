import styled from "styled-components";

export const ShoppingCartItemContainer = styled.div`
	display: flex;
	padding: 0.75rem 0.25rem;
	border-bottom: solid 1px ${(props) => props.theme.colors["base-button"]};
	justify-content: space-between;

	img {
		height: 64px;
		width: 64px;
	}
`;

export const ItemContainer = styled.div`
	display: flex;
	gap: 1.25rem;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	span {
		color: ${(props) => props.theme.colors["base-subtitle"]};
	}
`;

export const ActionsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const PriceContainer = styled.strong`
	color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const RemoveButton = styled.button`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	gap: 0.25rem;
	border: 0;
	border-radius: 6px;
	background-color: ${(props) => props.theme.colors["base-button"]};
	cursor: pointer;

	font-size: ${(props) => props.theme.fonts.button.m.size};
	line-height: ${(props) => props.theme.fonts.button.m.lineHeight};
	color: ${(props) => props.theme.colors["base-text"]};

	svg {
		color: ${(props) => props.theme.colors["brand-purple"]};
	}
`;
