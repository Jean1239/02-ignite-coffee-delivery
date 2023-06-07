import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./styles";

interface QuantityCounterProps {
	quantity: number;
	incrementQuantity: () => void;
	decrementQuantity: () => void;
}

export function QuantityCounter({
	quantity,
	incrementQuantity,
	decrementQuantity,
}: QuantityCounterProps) {
	function handleMinusClick() {
		decrementQuantity();
	}

	function handlePlusClick() {
		incrementQuantity();
	}

	return (
		<QuantityContainer>
			<button>
				<Minus size={14} weight="bold" onClick={handleMinusClick} />
			</button>
			<span>{quantity}</span>
			<button>
				<Plus size={14} weight="bold" onClick={handlePlusClick} />
			</button>
		</QuantityContainer>
	);
}
