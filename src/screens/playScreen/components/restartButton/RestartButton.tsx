import { useGameContext } from 'context/GameContext';
import { useNavigate } from 'react-router-dom';
import { GameAction } from 'types/gameAction';
import './restartButton.scss';

const RestartButton = ({ title }: { title: string }) => {
	const { dispatch } = useGameContext();

	const navigate = useNavigate();

	return (
		<button
			className="game-screen__restart hover-scale"
			onClick={() => {
				dispatch({
					type: GameAction.RestartGame,
				});
				navigate('/lobby');
			}}
		>
			{title}
		</button>
	);
};

export default RestartButton;
