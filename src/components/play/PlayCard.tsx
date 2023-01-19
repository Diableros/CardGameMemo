import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { CardContext } from '../../context/CardContext';
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
	const { state, dispatch } = useContext(AppContext);
	const { cardState, cardDispatch } = useContext(CardContext);

	const { rise, dawn, rotateTime } = getShowCardTimers(index, state.difficult);

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
			const timeOut = setTimeout(() => {
				dispatch({ type: ActionsEnum.setGameStatus, payload: GameStatus.lose });
			}, rotateTime);
			return () => {
				clearTimeout(timeOut);
			};
		}
	};

	useEffect(() => {
		if (state.playerHandCards.length === cardState.cardsOpen) {
			const timeOut = setTimeout(() => {
				dispatch({ type: ActionsEnum.setGameStatus, payload: GameStatus.win });
			}, rotateTime);
			return () => {
				clearTimeout(timeOut);
			};
		}
	}, [cardState.cardsOpen]);

	useEffect(() => {
		const timeOutRise = setTimeout(() => {
			setShirt(false);
		}, rise);
		const timeOutDawn = setTimeout(() => {
			setShirt(true);
			if (index === 0)
				dispatch({
					type: ActionsEnum.startGame,
					payload: {
						gameStatus: GameStatus.game,
						gameStartTime: Math.floor(Date.now() / 1000),
					},
				});
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
