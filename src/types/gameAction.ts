import { CardFaceType, CardItemType } from './cardItem';
import { DifficultType } from './difficult';
import { GameStatus } from './gameStatus';

export enum GameAction {
	InitGame = 'InitGame',
	StartGame = 'StartGame',
	OpenAllCards = 'OpenAllCards',
	SetGameStatus = 'SetGameStatus',
	RestartGame = 'RestartGame',
	HandleClickedCard = 'HandleClickedCard',
	OpenCard = 'OpenCard',
	makeMove = 'makeMove',
}

type MakeMovePayloadType = {
	prevCard: CardFaceType | null;
	playerHandCards: CardItemType[];
};

export type GameActionType =
	| { type: GameAction.InitGame; payload: DifficultType }
	| { type: GameAction.StartGame; payload: CardItemType[] }
	| { type: GameAction.OpenAllCards; payload: CardItemType[] }
	| { type: GameAction.SetGameStatus; payload: GameStatus }
	| { type: GameAction.RestartGame }
	| {
			type: GameAction.HandleClickedCard;
			payload: number;
	  }
	| { type: GameAction.OpenCard; payload: CardItemType[] }
	| { type: GameAction.makeMove; payload: MakeMovePayloadType };
