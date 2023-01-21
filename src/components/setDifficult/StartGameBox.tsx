import { useState, useContext, memo } from 'react';
import DifficultButton from './DifficultButton';
import { DifficultType } from '../../types/difficult';
import { GameContext } from '../../context/GameContext';
import { GameAction } from '../../types/gameAction';
import { GameStatus } from '../../types/gameStatus';
import { getPlayerCards } from '../../helpers/getPlayerCards';

const difficultButtonsArr: DifficultType[] = [1, 2, 3];

const MemoizedDifficultButton = memo(DifficultButton);

const StartGameBox = () => {
	const { dispatch } = useContext(GameContext);

	const [diffButton, setDiffButton] = useState<DifficultType>(0);

	const handleClickStartButton = (): void => {
		if (diffButton === 0) {
			dispatch({ type: GameAction.ShowAlert });
			return;
		}

		dispatch({
			type: GameAction.InitGame,
			payload: {
				difficult: diffButton,
				gameStatus: GameStatus.preGame,
				playerHandCards: getPlayerCards(diffButton),
			},
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
