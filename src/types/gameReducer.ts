import { GameActionType } from './gameAction';
import { GameStateType } from './gameState';

export type GameReducerType = (
	state: GameStateType,
	action: GameActionType
) => GameStateType;
