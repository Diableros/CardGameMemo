import { CardIdentType, CardItemType } from './cardItem';
import { DifficultType } from './difficult';
import { GameStatus } from './gameStatus';

export enum GameAction {
	InitGame = 'InitGame',
	StartGame = 'StartGame',
	SetGameStatus = 'SetGameStatus',
	RestartGame = 'RestartGame',
	ShowAlert = 'ShowAlert',
	HideAlert = 'HideAlert',
	HandleClickedCard = 'HandleClickedCard',
	OpenCard = 'OpenCard',
	makeMove = 'makeMove',
}

type MakeMovePayloadType = {
	prevCard: CardIdentType | undefined;
	playerHandCards: CardItemType[];
};

export type GameActionType =
	| { type: GameAction.InitGame; payload: DifficultType }
	| { type: GameAction.StartGame; payload: CardItemType[] }
	| { type: GameAction.SetGameStatus; payload: GameStatus }
	| { type: GameAction.RestartGame }
	| { type: GameAction.ShowAlert }
	| { type: GameAction.HideAlert }
	| {
			type: GameAction.HandleClickedCard;
			payload: number;
	  }
	| { type: GameAction.OpenCard; payload: CardItemType[] }
	| { type: GameAction.makeMove; payload: MakeMovePayloadType };
