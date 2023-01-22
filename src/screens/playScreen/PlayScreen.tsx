import Timer from './components/timer/Timer';
import RestartButton from './components/restartButton/RestartButton';
import PlayCardGroup from './components/playCardGroup/PlayCardGroup';
import './playScreen.scss';
import { GameStatus } from 'src/types/gameStatus';
import { useGameContext } from 'src/context/GameContext';
import Blocker from './components/blocker/Blocker';
import Modal from './components/modal/Modal';

const PlayScreen = () => {
	const { gameStatus } = useGameContext();

	return (
		<>
			<div className="game-screen">
				<header className="game-screen__header">
					<Timer />
					<RestartButton title="Начать заново" />
				</header>
				<section className="playfield__card-box">
					<PlayCardGroup />
				</section>
			</div>
			{(() => {
				switch (gameStatus) {
					case GameStatus.preGame:
						return <Blocker />;

					case GameStatus.win:
						return <Modal gameStatus={GameStatus.win} />;

					case GameStatus.lose:
						return <Modal gameStatus={GameStatus.lose} />;

					default:
						return null;
				}
			})()}
		</>
	);
};

export default PlayScreen;
