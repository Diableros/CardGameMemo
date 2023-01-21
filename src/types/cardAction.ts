import { CardItemType } from './cardItem';

export enum CardAction {
	FirstCardOpen = 'FirstCardOpen',
	SecondCardOpen = 'SecondCardOpen',
	InitCardContext = 'InitCardContext',
}

export type CardActionType =
	| {
			type: CardAction.FirstCardOpen;
			payload: CardItemType;
	  }
	| {
			type: CardAction.SecondCardOpen;
	  }
	| {
			type: CardAction.InitCardContext;
	  };
