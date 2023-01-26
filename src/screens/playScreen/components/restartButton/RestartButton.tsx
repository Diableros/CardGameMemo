import { useGameContext } from 'context/GameContext';
import { GameAction } from 'types/gameAction';
import './restartButton.scss';

const RestartButton = ({ title }: { title: string }) => {
	const { dispatch } = useGameContext();

	return (
		<button
			className="game-screen__restart hover-scale"
			onClick={() => {
				dispatch({
					type: GameAction.RestartGame,
				});
			}}
		>
			{title}
		</button>
	);
};

export default RestartButton;
