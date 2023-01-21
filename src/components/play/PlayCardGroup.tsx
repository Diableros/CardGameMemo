import { useGameContext } from '../../context/GameContext';
import PlayCard from './PlayCard';
import cn from 'classnames';

const PlayCardGroup = () => {
	const { difficult, playerHandCards } = useGameContext();
	return (
		<div
			className={cn('game-screen__playfield', 'playfield', {
				[`card-columns-difficulty_${difficult}`]: true,
			})}
		>
			{playerHandCards.map((card, index) => (
				<PlayCard card={card} index={index} key={index} />
			))}
		</div>
	);
};

export default PlayCardGroup;
