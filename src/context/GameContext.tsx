import React, {
	ReactNode,
	createContext,
	useContext,
	useReducer,
	useMemo,
	useEffect,
} from 'react';
import initGameState from './initGameState';
import { GameAction } from 'types/gameAction';
import { GameActionType } from 'types/gameAction';
import { gameReducer } from 'reducer/gameReducer';
import { GameReducerType } from 'types/gameReducer';
import { GameStatus } from 'types/gameStatus';
import { DifficultType } from 'types/difficult';
import { GameTimeType } from 'types/gameTime';
import { CardItemType } from 'types/cardItem';
import { CardFaceType } from 'types/cardItem';
import { SHOW_CARD_TIME } from 'helpers/getShowCardTimers';
import { TIME_SHIFT_MULTIPLIER } from 'helpers/getShowCardTimers';

export type GameContextType = {
	gameStatus: GameStatus;
	difficult: DifficultType;
	gameStartTime: GameTimeType;
	playerHandCards: CardItemType[];
	prevCard: CardFaceType | undefined;
	clickedCard: number | undefined;
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

	const {
		gameStatus,
		difficult,
		gameStartTime,
		playerHandCards,
		prevCard,
		clickedCard,
	} = state;

	const memoState = useMemo(() => {
		return {
			gameStatus,
			difficult,
			gameStartTime,
			playerHandCards,
			prevCard,
			clickedCard,
			dispatch: dispatch,
		};
	}, [state]);

	useEffect(() => {
		if (gameStatus === GameStatus.preGame) {
			const preGameShowCardDelay = setTimeout(() => {
				const openedPlayerCards = playerHandCards.map((card) => ({
					...card,
					isOpen: true,
				}));

				dispatch({ type: GameAction.OpenAllCards, payload: openedPlayerCards });
			}, TIME_SHIFT_MULTIPLIER);

			const preGameTimeout = setTimeout(() => {
				const closedPlayerCards = playerHandCards.map((card) => ({
					...card,
					isOpen: false,
				}));

				dispatch({ type: GameAction.StartGame, payload: closedPlayerCards });
			}, SHOW_CARD_TIME);
			return () => {
				clearTimeout(preGameShowCardDelay);
				clearTimeout(preGameTimeout);
			};
		}
	}, [gameStatus]);

	useEffect(() => {
		if (clickedCard !== undefined) {
			const newPlayerHandCards = [...playerHandCards];
			newPlayerHandCards[clickedCard].isOpen = true;

			if (prevCard === undefined) {
				dispatch({
					type: GameAction.makeMove,
					payload: {
						prevCard: playerHandCards[clickedCard].face,
						playerHandCards: newPlayerHandCards,
					},
				});
			} else {
				if (playerHandCards[clickedCard].face === prevCard) {
					dispatch({
						type: GameAction.makeMove,
						payload: {
							prevCard: undefined,
							playerHandCards: newPlayerHandCards,
						},
					});

					if (
						playerHandCards.filter((card) => card.isOpen).length ===
						playerHandCards.length
					)
						dispatch({
							type: GameAction.SetGameStatus,
							payload: GameStatus.win,
						});
				} else {
					dispatch({
						type: GameAction.SetGameStatus,
						payload: GameStatus.lose,
					});
				}
			}
		}
	}, [clickedCard]);

	return (
		<GameContext.Provider value={memoState}>{children}</GameContext.Provider>
	);
};
