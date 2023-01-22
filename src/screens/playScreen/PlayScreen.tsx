import Timer from './components/timer/Timer';
import RestartButton from './components/restartButton/RestartButton';
import PlayCardGroup from './components/playCardGroup/PlayCardGroup';
import './playScreen.scss';

const PlayScreen = () => {
	return (
		<div className="game-screen">
			<header className="game-screen__header">
				<Timer />
				<RestartButton title="Начать заново" />
			</header>
			<section className="playfield__card-box">
				<PlayCardGroup />
			</section>
		</div>
	);
};

export default PlayScreen;
