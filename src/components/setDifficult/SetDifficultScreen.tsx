import StartGametBox from './StartGameBox';

const SetDifficultScreen = () => {
	return (
		<div className="start-screen">
			<h1 className="start-screen__header">Выбери сложность</h1>
			<StartGametBox />
		</div>
	);
};

export default SetDifficultScreen;
