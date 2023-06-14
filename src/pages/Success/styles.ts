import styled from "styled-components";

export const SuccessContainer = styled.div`
	padding-top: 5rem;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;

	h1 {
		font-family: ${(props) => props.theme.fonts.title.family};
		font-size: ${(props) => props.theme.fonts.title.l.size};
		font-weight: ${(props) => props.theme.fonts.title.l.weight};
		line-height: ${(props) => props.theme.fonts.title.l.lineHeight};

		color: ${(props) => props.theme.colors["brand-yellow-dark"]};
	}

	span {
		font-size: ${(props) => props.theme.fonts.text.l.size};
		line-height: ${(props) => props.theme.fonts.text.l.lineHeight};
		color: ${(props) => props.theme.colors["base-subtitle"]};
	}
`;

export const CardAndImageContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const DeliveryInfoCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 526px;
	padding: 2.5rem;

	border: 1px solid ${(props) => props.theme.colors["brand-yellow"]};
	border-radius: 6px 36px;
`;

export const DeliveryInfoCardRow = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	p {
		font-size: ${(props) => props.theme.fonts.text.m.size};
		font-weight: ${(props) => props.theme.fonts.text.m.weight};
		color: ${(props) => props.theme.colors["base-text"]};
	}
`;

interface IconContainerProps {
	color: "purple" | "yellow" | "yellow-dark";
}

export const IconContainer = styled.div<IconContainerProps>`
	height: 32px;
	width: 32px;
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 0;

	background-color: ${(props) => {
		switch (props.color) {
			case "purple":
				return props.theme.colors["brand-purple"];
			case "yellow":
				return props.theme.colors["brand-yellow"];
			case "yellow-dark":
				return props.theme.colors["brand-yellow-dark"];
		}
	}};

	svg {
		color: ${(props) => props.theme.colors["base-background"]};
	}
`;
