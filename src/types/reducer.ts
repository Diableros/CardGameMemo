import { ActionType } from './actions';
import { GameStateType } from './gameState';

export type ReducerType = (
	state: GameStateType,
	action: ActionType
) => GameStateType;
