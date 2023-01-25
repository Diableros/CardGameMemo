import { useState, memo } from 'react';
import DifficultButton from '../../components/difficultButton/DifficultButton';
import { DifficultType } from '../../../../types/difficult';
import { useGameContext } from '../../../../context/GameContext';
import { GameAction } from '../../../../types/gameAction';
import './startGameBox.scss';

const difficultButtonsArr: DifficultType[] = [1, 2, 3];

const MemoizedDifficultButton = memo(DifficultButton);

const StartGameBox = ({ showAlert }: { showAlert: () => void }) => {
	const { dispatch } = useGameContext();

	const [diffButton, setDiffButton] = useState<DifficultType>(0);

	const handleClickStartButton = (): void => {
		if (diffButton === 0) {
			showAlert();
			return;
		}

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
