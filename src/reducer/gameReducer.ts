import { GameStateType } from 'types/gameState';
import { GameReducerType } from 'types/gameReducer';
import { GameAction } from 'types/gameAction';
import initGameState from 'context/initGameState';
import { GameStatus } from 'types/gameStatus';
import { getPlayerCards } from 'helpers/getPlayerCards';

export const gameReducer: GameReducerType = (state, action): GameStateType => {
	switch (action.type) {
		case GameAction.InitGame:
			return {
				...state,
				difficult: action.payload,
				gameStatus: GameStatus.preGame,
				playerHandCards: getPlayerCards(action.payload),
			};

		case GameAction.OpenAllCards:
			return {
				...state,
				playerHandCards: action.payload,
			};

		case GameAction.StartGame:
			return {
				...state,
				gameStatus: GameStatus.game,
				gameStartTime: Math.floor(Date.now() / 1000),
				playerHandCards: action.payload,
			};

		case GameAction.SetGameStatus:
			return {
				...state,
				gameStatus: action.payload,
			};

		case GameAction.RestartGame:
			return initGameState;

		case GameAction.HandleClickedCard:
			return {
				...state,
				clickedCard: action.payload,
			};

		case GameAction.OpenCard:
			return {
				...state,
				playerHandCards: action.payload,
			};

		case GameAction.makeMove:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};
