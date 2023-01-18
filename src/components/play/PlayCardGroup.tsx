import { useContext, useReducer, memo } from 'react';
import { AppContext } from '../../context/AppContext';
import PlayCard from './PlayCard';
import { getCardsColumnsQty } from '../../helpers/getCradsColumnsQty';
import { CardReducerType } from '../../types/cardReducer';
import { CardReducer } from '../../reducer/CardReducer';
import { initCardState } from '../../context/initCardState';
import { CardContext } from '../../context/CardContext';

const PlayCardGroup = () => {
	const [cardState, cardDispatch] = useReducer<CardReducerType>(
		CardReducer,
		initCardState()
	);
	const { state } = useContext(AppContext);
	return (
		<div
			className="game-screen__playfield playfield"
			style={{
				gridTemplateColumns: `repeat(${getCardsColumnsQty(
					state.playerHandCards.length
				)},1fr)`,
			}}
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
