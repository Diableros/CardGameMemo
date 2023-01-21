import { useContext, useReducer, memo } from 'react';
import { GameContext } from '../../context/GameContext';
import PlayCard from './PlayCard';
import { CardReducerType } from '../../types/cardReducer';
import { CardReducer } from '../../reducer/CardReducer';
import { initCardState } from '../../context/initCardState';
import { CardContext } from '../../context/CardContext';
import cn from 'classnames';

const PlayCardGroup = () => {
	const [cardState, cardDispatch] = useReducer<CardReducerType>(
		CardReducer,
		initCardState
	);
	const { state } = useContext(GameContext);
	return (
		<div
			className={cn('game-screen__playfield', 'playfield', {
				[`card-columns-difficulty_${state.difficult}`]: true,
			})}
		>
			<CardContext.Provider value={{ cardState, cardDispatch }}>
				{state.playerHandCards.map((card, index) => (
					<PlayCard card={card} index={index} key={index} />
				))}
			</CardContext.Provider>
		</div>
	);
};

export default PlayCardGroup;
