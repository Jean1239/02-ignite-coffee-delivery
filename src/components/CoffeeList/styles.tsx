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

	@media (max-width: 425px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const CoffeeListFilter = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	button {
		text-transform: uppercase;
		cursor: pointer;

		border: solid 1px ${(props) => props.theme.colors["brand-yellow"]};
		color: ${(props) => props.theme.colors["brand-yellow"]};
		font-size: ${(props) => props.theme.fonts.tag.size};
		font-weight: ${(props) => props.theme.fonts.tag.weight};
		line-height: ${(props) => props.theme.fonts.tag.lineHeight};
		border-radius: 100px;
		padding: 0.375rem 0.75rem;

		background-color: ${(props) => props.theme.colors["base-background"]};

		&:hover {
			color: ${(props) => props.theme.colors["brand-yellow-dark"]};
			background-color: ${(props) => props.theme.colors["brand-yellow"]};
		}

		&.selectedTag {
			color: ${(props) => props.theme.colors["brand-yellow-dark"]};
			background-color: ${(props) => props.theme.colors["brand-yellow"]};
		}

		&.selectedTag:hover {
			color: ${(props) => props.theme.colors["brand-yellow-dark"]};
			background-color: ${(props) =>
				props.theme.colors["brand-yellow-light"]};
		}
	}
`;

export const CoffeeListGrid = styled.main`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 2rem;
	grid-row-gap: 2.5rem;

	@media (min-width: 500px) and (max-width: 950px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 499px) {
		grid-template-columns: 1fr;
	}
`;
