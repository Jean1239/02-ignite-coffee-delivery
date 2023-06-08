import styled from "styled-components";

export const IntroContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 70rem) {
		flex-direction: column;
	}
	img {
		max-width: 100%;
	}
`;

export const IntroLeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 588px;
	padding: 5.875rem 0 6.75rem;
	gap: 4.125rem;
`;

export const IntroImageContainer = styled.div``;

export const IntroText = styled.div`
	h1 {
		font-family: ${(props) => props.theme.fonts.title.family};
		font-size: ${(props) => props.theme.fonts.title.xl.size};
		font-weight: ${(props) => props.theme.fonts.title.xl.weight};
		color: ${(props) => props.theme.colors["base-title"]};
	}

	p {
		margin-top: 1rem;
		font-size: ${(props) => props.theme.fonts.text.l.size};
		color: ${(props) => props.theme.colors["base-subtitle"]};
	}
`;

export const IntroItens = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		grid-row-gap: 1rem;
	}
`;

export const IntroItemColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

export const IntroItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.75rem;

	color: ${(props) => props.theme.colors["base-text"]};
`;

interface IntroItemIconProps {
	variant: "yellow-dark" | "yellow" | "gray" | "purple";
}

export const IntroItemIcon = styled.span<IntroItemIconProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2rem;
	width: 2rem;
	padding: 0.5rem;
	border-radius: 50%;
	line-height: 0;
	background-color: ${(props) => {
		switch (props.variant) {
			case "yellow-dark":
				return props.theme.colors["brand-yellow-dark"];
			case "yellow":
				return props.theme.colors["brand-yellow"];
			case "gray":
				return props.theme.colors["base-text"];
			case "purple":
				return props.theme.colors["brand-purple"];
		}
	}};

	svg {
		color: ${(props) => props.theme.colors["base-background"]};
	}
`;
