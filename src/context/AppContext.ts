import React, { createContext } from 'react';
import initGameState from './initGameState';
import { GameStateType } from '../types/gameState';
import { ActionType } from '../types/actions';

export type AppContextType = {
	state: GameStateType;
	dispatch: React.Dispatch<ActionType>;
};

export const AppContext = createContext<AppContextType>({
	state: initGameState(),
	dispatch: () => {},
});
