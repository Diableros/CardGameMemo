import { ReactNode, useContext, useEffect } from 'react';
import { GameContext } from 'src/context/GameContext';
import { GameAction } from 'src/types/gameAction';

type PorpsType = {
	children: ReactNode;
};

const Alert = ({ children }: PorpsType) => {
	const { state, dispatch } = useContext(GameContext);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			dispatch({ type: GameAction.HideAlert });
		}, 2000);
		return () => {
			clearTimeout(timeOut);
		};
	}, [state.showAlert]);

	return (
		<div className="alert">
			<h1 className="alert__message">{children}</h1>
		</div>
	);
};

export default Alert;
