import { useGameContext } from 'src/context/GameContext';
import Alert from '../lobbyScreen/components/alert/Alert';
import StartGameBox from '../lobbyScreen/components/startGameBox/StartGameBox';
import './lobbyScreen.scss';

const LobbyScreen = () => {
	const { showAlert } = useGameContext();

	return (
		<div className="start-screen">
			<h1 className="start-screen__header">Выбери сложность</h1>
			<StartGameBox />
			{showAlert ? <Alert>Выберите сложность!</Alert> : null}
		</div>
	);
};

export default LobbyScreen;
