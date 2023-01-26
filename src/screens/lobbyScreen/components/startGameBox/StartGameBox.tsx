import { useState, memo } from 'react';
import DifficultButton from 'screens/lobbyScreen/components/difficultButton/DifficultButton';
import { DifficultType } from 'types/difficult';
import { useGameContext } from 'context/GameContext';
import { GameAction } from 'types/gameAction';
import './startGameBox.scss';
import { useNavigate } from 'react-router-dom';

const difficultButtonsArr: DifficultType[] = [1, 2, 3];

const MemoizedDifficultButton = memo(DifficultButton);

const StartGameBox = ({ showAlert }: { showAlert: () => void }) => {
	const { dispatch } = useGameContext();

	const [diffButton, setDiffButton] = useState<DifficultType>(0);

	const navigate = useNavigate();

	const handleClickStartButton = (): void => {
		if (diffButton === 0) {
			showAlert();
			return;
		}

		navigate('/play');

		dispatch({
			type: GameAction.InitGame,
			payload: diffButton,
		});
	};

	return (
		<>
			<div className="start-screen__difficult-box">
				{difficultButtonsArr.map((btn) => (
					<MemoizedDifficultButton
						selected={diffButton === btn}
						btnNumber={btn}
						key={btn}
						setDiffButton={setDiffButton}
					/>
				))}
			</div>
			<button
				className="start-screen__start-button hover-scale"
				onClick={() => handleClickStartButton()}
			>
				Старт
			</button>
		</>
	);
};

export default StartGameBox;
