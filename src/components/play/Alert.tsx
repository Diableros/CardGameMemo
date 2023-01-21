import { ReactNode, useContext, useEffect } from 'react';
import { AppContext } from 'src/context/AppContext';
import { GameAction } from 'src/types/gameAction';

type PorpsType = {
	children: ReactNode;
};

const Alert = ({ children }: PorpsType) => {
	const { state, dispatch } = useContext(AppContext);

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
