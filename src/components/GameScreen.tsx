import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { GameStatus } from '../types/gameStatus';
import Blocker from './play/Blocker';
import Modal from './play/Modal';
import PlayScreen from './play/PlayScreen';
import SetDifficultScreen from './setDifficult/SetDifficultScreen';

const GameScreen = () => {
	const { state } = useContext(AppContext);

	return (
		<main className="main">
			{(() => {
				switch (state.gameStatus) {
					case GameStatus.lobby:
						return <SetDifficultScreen alert={state.showAlert} />;

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
						return <SetDifficultScreen alert={state.showAlert} />;
				}
			})()}
		</main>
	);
};

export default GameScreen;
