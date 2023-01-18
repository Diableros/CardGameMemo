import { GameStateType } from '../types/gameState';
import { ReducerType } from '../types/reducer';
import { ActionsEnum } from '../types/actions';
import { GameStatus } from '../types/gameStatus';

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
			return {
				...state,
				difficult: 0,
				gameStatus: GameStatus.lobby,
			};

		default:
			return { ...state };
	}
};
