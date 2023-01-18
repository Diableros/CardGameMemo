import { CardItemType } from './cardItem';
import { DifficultType } from './difficult';
import { GameStatus } from './gameStatus';
import { GameTimeType } from './gameTime';

export enum ActionsEnum {
	initGame = 'initGame',
	startGame = 'startGame',
	setGameStatus = 'setGameStatus',
	restartGame = 'restartGame',
}

export type ActionType =
	| {
			type: ActionsEnum.initGame;
			payload: {
				difficult: DifficultType;
				gameStatus: GameStatus.preGame;
				playerHandCards: CardItemType[];
			};
	  }
	| {
			type: ActionsEnum.startGame;
			payload: { gameStatus: GameStatus.game; gameStartTime: GameTimeType };
	  }
	| { type: ActionsEnum.setGameStatus; payload: GameStatus }
	| { type: ActionsEnum.restartGame };
