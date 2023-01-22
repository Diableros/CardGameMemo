import { useGameContext } from './context/GameContext';
import { GameStatus } from './types/gameStatus';

import PlayScreen from './screens/playScreen/PlayScreen';
import LobbyScreen from './screens/lobbyScreen/LobbyScreen';
import './style/app.scss';

const App = () => {
	const { gameStatus } = useGameContext();

	return (
		<main className="main">
			{gameStatus === GameStatus.lobby ? <LobbyScreen /> : <PlayScreen />}
		</main>
	);
};

export default App;
