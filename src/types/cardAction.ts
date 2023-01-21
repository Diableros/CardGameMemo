import { CardItemType } from './cardItem';

export enum CardAction {
	FirstCardOpen = 'FirstCardOpen',
	SecondCardOpen = 'SecondCardOpen',
}

export type CardActionType =
	| {
			type: CardAction.FirstCardOpen;
			payload: CardItemType;
	  }
	| {
			type: CardAction.SecondCardOpen;
	  };
