import { GameActionType } from './gameAction';
import { GameStateType } from './gameState';

export type ReducerType = (
	state: GameStateType,
	action: GameActionType
) => GameStateType;
