import RestartButton from './RestartButton';
import Timer from './Timer';

const PlayHeader = () => {
	return (
		<header className="game-screen__header">
			<Timer />
			<RestartButton title="Начать заново" />
		</header>
	);
};

export default PlayHeader;
