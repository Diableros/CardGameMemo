import { useGameContext } from '../../../../context/GameContext';
import { GameAction } from '../../../../types/gameAction';
import { CardItemType } from '../../../../types/cardItem';
import { images } from '../../../../img/cardsImages';
import cn from 'classnames';
import './playCard.scss';

type PropsType = {
	card: CardItemType;
};

const PlayCard = ({ card }: PropsType) => {
	const { dispatch } = useGameContext();

	const { id, face, isOpen } = card;

	const handleCardClick = () => {
		dispatch({ type: GameAction.HandleClickedCard, payload: id });
	};

	return (
		<div
			className={cn('playfield__card', 'card', 'hover-scale', {
				'card__click-ignore': isOpen,
			})}
			onClick={() => {
				handleCardClick();
			}}
		>
			<img
				className={!isOpen ? 'card__front card__front--shirt' : 'card__front'}
				src={images[`card${face.R}${face.S}`]}
			></img>
			<img
				className={!isOpen ? 'card__back card__back--shirt' : 'card__back'}
				src={images.shirt}
			></img>
		</div>
	);
};

export default PlayCard;
