import { CardAction } from '../types/cardAction';
import { CardReducerType } from '../types/cardReducer';
import { CardStateType } from '../types/cardState';

export const CardReducer: CardReducerType = (
	cardState,
	cardAction
): CardStateType => {
	switch (cardAction.type) {
		case CardAction.FirstCardOpen:
			return {
				...cardState,
				cardPrev: cardAction.payload,
				cardsOpen: cardState.cardsOpen + 1,
			};

		case CardAction.SecondCardOpen:
			return {
				...cardState,
				cardPrev: undefined,
				cardsOpen: cardState.cardsOpen + 1,
			};

		default:
			return { ...cardState };
	}
};
