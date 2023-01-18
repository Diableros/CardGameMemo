import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { GameStatus } from '../types/gameStatus';
import Modal from './play/Modal';
import PlayScreen from './play/PlayScreen';
import SetDifficultScreen from './setDifficult/SetDifficultScreen';

const GameScreen = () => {
	const { state } = useContext(AppContext);

	// console.log('render GameScreen');

	return (
		<main className="main">
			{state.gameStatus === GameStatus.lobby ? (
				<SetDifficultScreen />
			) : (
				<PlayScreen />
			)}
			{state.gameStatus === GameStatus.win ? (
				<Modal gameStatus={GameStatus.win} />
			) : null}
			{state.gameStatus === GameStatus.lose ? (
				<Modal gameStatus={GameStatus.lose} />
			) : null}
		</main>
	);
};

export default GameScreen;
