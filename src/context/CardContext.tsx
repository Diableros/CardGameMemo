import React, {
	ReactNode,
	createContext,
	useContext,
	useReducer,
	useMemo,
} from 'react';
import { CardActionType } from '../types/cardAction';
import { initCardState } from './initCardState';
import { CardReducerType } from 'src/types/cardReducer';
import { cardReducer } from 'src/reducer/cardReducer';
import { CardItemType } from 'src/types/cardItem';

export type CardContextType = {
	cardPrev: CardItemType | undefined;
	cardsOpen: number;
	cardDispatch: React.Dispatch<CardActionType>;
};

export const CardContext = createContext<CardContextType>({
	...initCardState,
	cardDispatch: () => {},
});

export function useCardContext() {
	const stateCardContext = useContext(CardContext);
	if (!stateCardContext) {
		throw new Error('stateCardContext can be accessed only under Providers');
	}

	return stateCardContext;
}

export const CardProvider = ({ children }: { children: ReactNode }) => {
	const [cardState, cardDispatch] = useReducer<CardReducerType>(
		cardReducer,
		initCardState
	);

	const { cardPrev, cardsOpen } = cardState;

	const memoState = useMemo(() => {
		return {
			cardPrev,
			cardsOpen,
			cardDispatch,
		};
	}, [cardState]);

	return (
		<CardContext.Provider value={memoState}>{children}</CardContext.Provider>
	);
};
