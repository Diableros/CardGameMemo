const cardsMultiplierForCalc: number = 2;

export const getCardsColumnsQty = (cardsQty: number): number => {
	const cardsColumnsQty: number = Math.floor(
		Math.sqrt(cardsQty * cardsMultiplierForCalc)
	);

	return cardsColumnsQty;
};
