import PlayField from './PlayField';
import PlayHeader from './PlayHeader';

const PlayScreen = () => {
	return (
		<div className="game-screen">
			<PlayHeader />
			<PlayField />
		</div>
	);
};

export default PlayScreen;
