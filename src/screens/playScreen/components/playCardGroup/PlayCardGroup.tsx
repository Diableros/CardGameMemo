import { useGameContext } from '../../../../context/GameContext';
import PlayCard from '../playCard/PlayCard';
import cn from 'classnames';
import './playCardGroup.scss';

const PlayCardGroup = () => {
	const { difficult, playerHandCards } = useGameContext();
	return (
		<div
			className={cn('game-screen__playfield', 'playfield', {
				[`card-columns-difficulty_${difficult}`]: true,
			})}
		>
			{playerHandCards.map((card) => (
				<PlayCard card={card} key={card.id} />
			))}
		</div>
	);
};

export default PlayCardGroup;
