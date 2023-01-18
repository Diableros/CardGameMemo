import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ActionsEnum } from '../../types/actions';

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
					type: ActionsEnum.restartGame,
				});
			}}
		>
			{title}
		</button>
	);
};

export default RestartButton;
