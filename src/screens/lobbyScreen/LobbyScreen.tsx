import Alert from '../lobbyScreen/components/alert/Alert';
import StartGameBox from '../lobbyScreen/components/startGameBox/StartGameBox';
import './lobbyScreen.scss';

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
