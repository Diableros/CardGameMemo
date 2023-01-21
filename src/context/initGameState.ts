import { GameStateType } from '../types/gameState';
import { GameStatus } from '../types/gameStatus';

const initGameState: GameStateType = {
	gameStatus: GameStatus.lobby,
	difficult: 0,
	gameStartTime: 0,
	playerHandCards: [],
	showAlert: false,
};

export default initGameState;
