import styled from "styled-components";

interface StyledInputProps {
	variant: "sm" | "md" | "lg";
}

export const StyledInput = styled.input<StyledInputProps>`
	width: 100%;
	border: 1px solid ${(props) => props.theme.colors["base-button"]};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors["base-input"]};
	padding: 0.75rem;
	max-width: ${(props) => {
		switch (props.variant) {
			case "sm":
				return "60px";
			case "md":
				return "200px";
			case "lg":
				return "none";
		}
	}};
`;

export const FormGroup = styled.div`
	display: flex;
	gap: 0.75rem;
`;
