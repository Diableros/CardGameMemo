import { CardItemType } from './cardItem';

export type CardStateType = {
	cardPrev: CardItemType | undefined;
	cardsOpen: number;
};
