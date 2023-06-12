import { InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	variant?: "sm" | "md" | "lg";
}

export function Input({ variant = "lg", ...props }: InputProps) {
	return <StyledInput variant={variant} {...props} />;
}
