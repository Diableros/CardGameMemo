import { ReactNode, useEffect } from 'react';
import { useGameContext } from 'src/context/GameContext';
import { GameAction } from 'src/types/gameAction';

const Alert = ({ children }: { children: ReactNode }) => {
	const { showAlert, dispatch } = useGameContext();

	useEffect(() => {
		const timeOut = setTimeout(() => {
			dispatch({ type: GameAction.HideAlert });
		}, 2000);
		return () => {
			clearTimeout(timeOut);
		};
	}, [showAlert]);

	return (
		<div className="alert">
			<h1 className="alert__message">{children}</h1>
		</div>
	);
};

export default Alert;
