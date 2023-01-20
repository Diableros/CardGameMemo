import { GameStateType } from '../types/gameState';
import { ReducerType } from '../types/reducer';
import { ActionsEnum } from '../types/actions';
import { GameStatus } from '../types/gameStatus';
import initGameState from 'src/context/initGameState';

export const Reducer: ReducerType = (state, action): GameStateType => {
	switch (action.type) {
		case ActionsEnum.initGame:
			return {
				...state,
				...action.payload,
			};

		case ActionsEnum.startGame:
			return {
				...state,
				...action.payload,
			};

		case ActionsEnum.setGameStatus:
			return {
				...state,
				gameStatus: action.payload,
			};

		case ActionsEnum.restartGame:
			return initGameState();

		case ActionsEnum.showAlert:
			return {
				...state,
				showAlert: true,
			};

		case ActionsEnum.hideAlert:
			return {
				...state,
				showAlert: false,
			};

		default:
			return { ...state };
	}
};
