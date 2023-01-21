import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { GameAction } from '../../types/gameAction';

type PropsType = {
	title: string;
};

const RestartButton = ({ title }: PropsType) => {
	const { dispatch } = useContext(GameContext);

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
