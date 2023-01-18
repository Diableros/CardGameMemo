import { CardActionsEnum } from '../types/cardAction';
import { CardReducerType } from '../types/cardReducer';
import { CardStateType } from '../types/cardState';

export const CardReducer: CardReducerType = (
	cardState,
	cardAction
): CardStateType => {
	switch (cardAction.type) {
		case CardActionsEnum.firstCardOpen:
			return {
				...cardState,
				cardPrev: cardAction.payload,
				cardsOpen: cardState.cardsOpen + 1,
			};

		case CardActionsEnum.secondCardOpen:
			return {
				...cardState,
				cardPrev: undefined,
				cardsOpen: cardState.cardsOpen + 1,
			};

		default:
			return { ...cardState };
	}
};
