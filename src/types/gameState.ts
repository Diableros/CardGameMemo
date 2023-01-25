import { CardItemType } from './cardItem';
import { CardFaceType } from './cardItem';
import { DifficultType } from './difficult';
import { GameStatus } from './gameStatus';
import { GameTimeType } from './gameTime';

export type GameStateType = {
	gameStatus: GameStatus;
	difficult: DifficultType;
	gameStartTime: GameTimeType;
	playerHandCards: CardItemType[];
	prevCard: CardFaceType | undefined;
	clickedCard: number | undefined;
};
