import styled from "styled-components";

export const CoffeeListHeader = styled.header`
	display: flex;
	text-align: center;
	justify-content: space-between;

	margin-bottom: 3.375rem;

	h2 {
		font-family: ${(props) => props.theme.fonts.title.family};
		font-size: ${(props) => props.theme.fonts.title.l.size};
		font-weight: ${(props) => props.theme.fonts.title.l.weight};
		color: ${(props) => props.theme.colors["base-subtitle"]};
	}
`;

export const CoffeeListFilter = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;

	span {
		border: solid 1px ${(props) => props.theme.colors["brand-yellow"]};
		color: ${(props) => props.theme.colors["brand-yellow"]};
		font-size: ${(props) => props.theme.fonts.tag.size};
		font-weight: ${(props) => props.theme.fonts.tag.weight};
		line-height: ${(props) => props.theme.fonts.tag.lineHeight};
		border-radius: 100px;
		padding: 0.375rem 0.75rem;
	}
`;

export const CoffeeListGrid = styled.main`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 2rem;
	grid-row-gap: 2.5rem;
`;
