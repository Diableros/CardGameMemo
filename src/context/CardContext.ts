import React, { createContext } from 'react';
import { CardActionType } from '../types/cardAction';
import { CardStateType } from '../types/cardState';
import { initCardState } from './initCardState';

export type CardContextType = {
	cardState: CardStateType;
	cardDispatch: React.Dispatch<CardActionType>;
};

export const CardContext = createContext<CardContextType>({
	cardState: initCardState(),
	cardDispatch: () => {},
});
