import styled from "styled-components";

export const HeaderContainer = styled.header`
	position: fixed;
	max-width: 90rem;
	z-index: 9999;
	width: 100%;
	padding: 0 1.5rem;
	background-color: ${(props) => props.theme.colors["base-background"]};
	@media (min-width: 90rem) {
		right: -8px;
		margin: 0 calc((100vw - 90rem) / 2);
		padding: 0 10rem;
	}
`;

export const NavContainer = styled.nav`
	display: flex;
	text-align: center;
	justify-content: space-between;
	padding: 2rem 0;
`;

export const LocationAndCartContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

const BaseSpanContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	gap: 0.25rem;
	border-radius: 8px;
`;

export const LocationSpanContainer = styled(BaseSpanContainer)`
	background-color: ${(props) => props.theme.colors["brand-purple-light"]};
	color: ${(props) => props.theme.colors["brand-purple-dark"]};
	font-size: ${(props) => props.theme.fonts.text.s.size};

	svg {
		color: ${(props) => props.theme.colors["brand-purple"]};
	}
`;

export const CartSpanContainer = styled(BaseSpanContainer)`
	background-color: ${(props) => props.theme.colors["brand-yellow-light"]};

	svg {
		color: ${(props) => props.theme.colors["brand-yellow-dark"]};
	}
`;
