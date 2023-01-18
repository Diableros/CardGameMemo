import { CardItemType } from './cardItem';
import { DifficultType } from './difficult';
import { GameStatus } from './gameStatus';
import { GameTimeType } from './gameTime';

export enum ActionsEnum {
	startGame = 'startGame',
	setGameStatus = 'setGameStatus',
	restartGame = 'restartGame',
}

export type ActionType =
	| {
			type: ActionsEnum.startGame;
			payload: {
				difficult: DifficultType;
				gameStartTime: GameTimeType;
				gameStatus: GameStatus.game;
				playerHandCards: CardItemType[];
			};
	  }
	| { type: ActionsEnum.setGameStatus; payload: GameStatus }
	| { type: ActionsEnum.restartGame };
