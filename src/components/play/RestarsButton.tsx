import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { GameAction } from '../../types/gameAction';

type PropsType = {
	title: string;
};

const RestartButton = ({ title }: PropsType) => {
	const { dispatch } = useContext(AppContext);

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
