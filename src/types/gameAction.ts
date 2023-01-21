import { CardItemType } from './cardItem';
import { DifficultType } from './difficult';
import { GameStatus } from './gameStatus';
import { GameTimeType } from './gameTime';

export enum GameAction {
	InitGame = 'InitGame',
	StartGame = 'StartGame',
	SetGameStatus = 'SetGameStatus',
	RestartGame = 'RestartGame',
	ShowAlert = 'ShowAlert',
	HideAlert = 'HideAlert',
}

type InitGamePayloadType = {
	difficult: DifficultType;
	gameStatus: GameStatus.preGame;
	playerHandCards: CardItemType[];
};

type StartGamePayloadType = {
	gameStatus: GameStatus.game;
	gameStartTime: GameTimeType;
};

export type GameActionType =
	| {
			type: GameAction.InitGame;
			payload: InitGamePayloadType;
	  }
	| {
			type: GameAction.StartGame;
			payload: StartGamePayloadType;
	  }
	| { type: GameAction.SetGameStatus; payload: GameStatus }
	| { type: GameAction.RestartGame }
	| { type: GameAction.ShowAlert }
	| { type: GameAction.HideAlert };
