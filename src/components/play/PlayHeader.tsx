import RestartButton from './RestarsButton';
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
