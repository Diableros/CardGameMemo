import { CardItemType } from './cardItem';

export enum CardActionsEnum {
	firstCardOpen = 'firstCardOpen',
	secondCardOpen = 'secondCardOpen',
}

export type CardActionType =
	| {
			type: CardActionsEnum.firstCardOpen;
			payload: CardItemType;
	  }
	| {
			type: CardActionsEnum.secondCardOpen;
	  };
