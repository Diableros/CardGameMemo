import { useEffect } from 'react';
import { useGameContext } from 'context/GameContext';
import { GameStatus } from 'types/gameStatus';
import 'style/app.scss';
import { Outlet, useNavigate } from 'react-router-dom';

const App = () => {
	const { gameStatus } = useGameContext();
	const navigate = useNavigate();

	useEffect(() => {
		switch (gameStatus) {
			case GameStatus.lobby:
				navigate('/lobby');
				break;

			default:
				navigate('/play');
				break;
		}
	}, [gameStatus]);

	return (
		<main className="main">
			<Outlet />
		</main>
	);
};

export default App;
