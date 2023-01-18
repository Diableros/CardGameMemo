import { useContext, useEffect, useState, useCallback } from 'react';
import { AppContext, AppContextType } from '../../context/AppContext';
import { CardContext, CardContextType } from '../../context/CardContext';
import { getShowCardTimers } from '../../helpers/getShowCardTimers';
import { ActionsEnum } from '../../types/actions';
import { CardActionsEnum } from '../../types/cardAction';
import { CardItemType } from '../../types/cardItem';
import { GameStatus } from '../../types/gameStatus';

type PropsType = {
	card: CardItemType;
	index: number;
};

const PlayCard = ({ card, index }: PropsType) => {
	const [shirt, setShirt] = useState<boolean>(true);
	const { state, dispatch } = useContext<AppContextType>(AppContext);
	const { cardState, cardDispatch } = useContext<CardContextType>(CardContext);

	const handleCardClick = () => {
		setShirt(false);

		if (!cardState.cardPrev) {
			cardDispatch({
				type: CardActionsEnum.firstCardOpen,
				payload: card,
			});
		} else if (cardState.cardPrev === card) {
			cardDispatch({
				type: CardActionsEnum.secondCardOpen,
			});
		} else {
			dispatch({ type: ActionsEnum.setGameStatus, payload: GameStatus.lose });
		}
	};

	useEffect(() => {
		if (state.playerHandCards.length === cardState.cardsOpen)
			dispatch({ type: ActionsEnum.setGameStatus, payload: GameStatus.win });
	}, [cardState.cardsOpen]);

	const { rise, dawn } = getShowCardTimers(index, state.difficult);

	useEffect(() => {
		const timeOutRise = setTimeout(() => {
			setShirt(false);
		}, rise);
		const timeOutDawn = setTimeout(() => {
			setShirt(true);
		}, dawn);
		return () => {
			clearTimeout(timeOutRise);
			clearTimeout(timeOutDawn);
		};
	}, []);

	return (
		<div
			className="playfield__card card hover-scale"
			style={!shirt ? { pointerEvents: 'none' } : { pointerEvents: 'all' }}
			onClick={() => {
				handleCardClick();
			}}
		>
			<div
				className={shirt ? 'card__front card__front--shirt' : 'card__front'}
				style={{ backgroundImage: `url('../img/${card.R}${card.S}.svg')` }}
			></div>
			<div
				className={shirt ? 'card__back card__back--shirt' : 'card__back'}
			></div>
		</div>
	);
};

export default PlayCard;
