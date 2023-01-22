import { useGameContext } from './context/GameContext';
import { GameStatus } from './types/gameStatus';
import Blocker from './screens/playScreen/components/blocker/Blocker';
import Modal from './screens/playScreen/components/modal/Modal';
import PlayScreen from './screens/playScreen/PlayScreen';
import SetDifficultScreen from './screens/lobbyScreen/LobbyScreen';
import './style/app.scss';

const App = () => {
	const { showAlert, gameStatus } = useGameContext();

	return (
		<main className="main">
			{(() => {
				switch (gameStatus) {
					case GameStatus.lobby:
						return <SetDifficultScreen alert={showAlert} />;

					case GameStatus.game:
						return <PlayScreen />;

					case GameStatus.preGame:
						return (
							<>
								<PlayScreen />
								<Blocker />
							</>
						);

					case GameStatus.win:
						return (
							<>
								<PlayScreen />
								<Modal gameStatus={GameStatus.win} />
							</>
						);

					case GameStatus.lose:
						return (
							<>
								<PlayScreen />
								<Modal gameStatus={GameStatus.lose} />
							</>
						);

					default:
						return <SetDifficultScreen alert={showAlert} />;
				}
			})()}
		</main>
	);
};

export default App;
