import { StyledInput } from "./styles";

interface InputProps {
	variant?: "sm" | "md" | "lg";
	type: "text" | "number";
	placeholder?: string;
}

export function Input({
	variant = "lg",
	type = "text",
	placeholder,
}: InputProps) {
	return (
		<StyledInput variant={variant} type={type} placeholder={placeholder} />
	);
}
