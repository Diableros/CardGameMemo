import React, {
	ReactNode,
	createContext,
	useContext,
	useReducer,
	useMemo,
} from 'react';
import initGameState from './initGameState';
import { GameActionType } from '../types/gameAction';
import { gameReducer } from 'src/reducer/gameReducer';
import { GameReducerType } from 'src/types/gameReducer';
import { GameStatus } from 'src/types/gameStatus';
import { DifficultType } from 'src/types/difficult';
import { GameTimeType } from 'src/types/gameTime';
import { CardItemType } from 'src/types/cardItem';

export type GameContextType = {
	gameStatus: GameStatus;
	difficult: DifficultType;
	gameStartTime: GameTimeType;
	playerHandCards: CardItemType[];
	showAlert: boolean;
	dispatch: React.Dispatch<GameActionType>;
};

export const GameContext = createContext<GameContextType>({
	...initGameState,
	dispatch: () => {},
});

export function useGameContext() {
	const stateGameContext = useContext(GameContext);
	if (!stateGameContext) {
		throw new Error('stateGameContext can be accessed only under Providers');
	}

	return stateGameContext;
}

export const GameProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer<GameReducerType>(
		gameReducer,
		initGameState
	);

	const { gameStatus, difficult, gameStartTime, playerHandCards, showAlert } =
		state;

	const memoState = useMemo(() => {
		return {
			gameStatus,
			difficult,
			gameStartTime,
			playerHandCards,
			showAlert,
			dispatch: dispatch,
		};
	}, [state]);

	return (
		<GameContext.Provider value={memoState}>{children}</GameContext.Provider>
	);
};
