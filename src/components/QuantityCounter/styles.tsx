import styled from "styled-components";

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
