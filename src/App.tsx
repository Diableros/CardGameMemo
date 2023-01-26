import { useEffect } from 'react';
import './style/app.scss';
import { Outlet, useNavigate } from 'react-router-dom';

const App = () => {
	// const { gameStatus } = useGameContext();
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/lobby');
	}, []);

	return (
		<main className="main">
			<Outlet />
		</main>
	);
};

export default App;
