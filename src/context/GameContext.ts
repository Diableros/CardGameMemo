import React, { createContext } from 'react';
import initGameState from './initGameState';
import { GameStateType } from '../types/gameState';
import { GameAction, GameActionType } from '../types/gameAction';

export type AppContextType = {
	state: GameStateType;
	dispatch: React.Dispatch<GameActionType>;
};

export const GameContext = createContext<AppContextType>({
	state: initGameState,
	dispatch: () => {},
});
