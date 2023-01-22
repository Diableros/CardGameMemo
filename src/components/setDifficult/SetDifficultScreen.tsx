import Alert from '../play/Alert';
import StartGameBox from './StartGameBox';

const SetDifficultScreen = ({ alert }: { alert: boolean }) => {
	return (
		<div className="start-screen">
			<h1 className="start-screen__header">Выбери сложность</h1>
			<StartGameBox />
			{alert ? <Alert>Выберите сложность!</Alert> : null}
		</div>
	);
};

export default SetDifficultScreen;
