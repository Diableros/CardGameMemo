import { GameStateType } from '../types/gameState';
import { ReducerType } from '../types/reducer';
import { GameAction } from '../types/gameAction';
import initGameState from 'src/context/initGameState';

export const Reducer: ReducerType = (state, action): GameStateType => {
	switch (action.type) {
		case GameAction.InitGame:
			return {
				...state,
				...action.payload,
			};

		case GameAction.StartGame:
			return {
				...state,
				...action.payload,
			};

		case GameAction.SetGameStatus:
			return {
				...state,
				gameStatus: action.payload,
			};

		case GameAction.RestartGame:
			return initGameState;

		case GameAction.ShowAlert:
			return {
				...state,
				showAlert: true,
			};

		case GameAction.HideAlert:
			return {
				...state,
				showAlert: false,
			};

		default:
			return { ...state };
	}
};
