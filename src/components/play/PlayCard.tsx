import { useEffect, useState } from 'react';
import { useGameContext } from '../../context/GameContext';
import { useCardContext } from '../../context/CardContext';
import { getShowCardTimers } from '../../helpers/getShowCardTimers';
import { GameAction } from '../../types/gameAction';
import { CardAction } from '../../types/cardAction';
import { CardItemType } from '../../types/cardItem';
import { GameStatus } from '../../types/gameStatus';
import { images } from '../../img/cardsImages';
import cn from 'classnames';

type PropsType = {
	card: CardItemType;
	index: number;
};

const PlayCard = ({ card, index }: PropsType) => {
	const [shirt, setShirt] = useState<boolean>(true);
	const { difficult, playerHandCards, dispatch } = useGameContext();
	const { cardPrev, cardsOpen, cardDispatch } = useCardContext();

	const { openCard, closeCard, DELAY_BEFORE_MODAL } = getShowCardTimers(
		index,
		difficult
	);

	const handleCardClick = () => {
		setShirt(false);

		if (!cardPrev) {
			cardDispatch({
				type: CardAction.FirstCardOpen,
				payload: card,
			});
		} else if (cardPrev === card) {
			cardDispatch({
				type: CardAction.SecondCardOpen,
			});
		} else {
			const timeOut = setTimeout(() => {
				dispatch({ type: GameAction.SetGameStatus, payload: GameStatus.lose });
			}, DELAY_BEFORE_MODAL);
			return () => {
				clearTimeout(timeOut);
			};
		}
	};

	useEffect(() => {
		if (playerHandCards.length === cardsOpen) {
			const timeOut = setTimeout(() => {
				dispatch({ type: GameAction.SetGameStatus, payload: GameStatus.win });
			}, DELAY_BEFORE_MODAL);
			return () => {
				clearTimeout(timeOut);
			};
		}
	}, [cardsOpen]);

	useEffect(() => {
		const timeOutRise = setTimeout(() => {
			setShirt(false);
		}, openCard);
		const timeOutDawn = setTimeout(() => {
			setShirt(true);
			if (index === 0)
				dispatch({
					type: GameAction.StartGame,
					payload: {
						gameStatus: GameStatus.game,
						gameStartTime: Math.floor(Date.now() / 1000),
					},
				});
		}, closeCard);
		return () => {
			clearTimeout(timeOutRise);
			clearTimeout(timeOutDawn);
		};
	}, []);

	return (
		<div
			className={cn('playfield__card', 'card', 'hover-scale', {
				'card__click-ignore': !shirt,
			})}
			onClick={() => {
				handleCardClick();
			}}
		>
			<img
				className={shirt ? 'card__front card__front--shirt' : 'card__front'}
				src={images[`card${card.R}${card.S}`]}
			></img>
			<img
				className={shirt ? 'card__back card__back--shirt' : 'card__back'}
				src={images.shirt}
			></img>
		</div>
	);
};

export default PlayCard;
