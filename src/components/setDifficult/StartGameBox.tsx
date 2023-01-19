import { useState, useContext, memo, useEffect } from 'react';
import DifficultButton from './DifficultButton';
import { DifficultType } from '../../types/difficult';
import { AppContext } from '../../context/AppContext';
import { ActionsEnum } from '../../types/actions';
import { GameStatus } from '../../types/gameStatus';
import { getPlayerCards } from '../../helpers/getPlayerCards';

const difficultButtonsArr: DifficultType[] = [1, 2, 3];

const MemoizedDifficultButton = memo(DifficultButton);

const StartGametBox = () => {
	const { state, dispatch } = useContext(AppContext);

	const [diffButton, setDiffButton] = useState<DifficultType>(0);

	const handleClickStartButton = (): void => {
		if (diffButton === 0) {
			dispatch({ type: ActionsEnum.showAlert });
			return;
		}

		dispatch({
			type: ActionsEnum.initGame,
			payload: {
				difficult: diffButton,
				gameStatus: GameStatus.preGame,
				playerHandCards: getPlayerCards(diffButton),
			},
		});
	};

	useEffect(() => {
		const timeOut = setTimeout(() => {
			dispatch({ type: ActionsEnum.hideAlert });
		}, 2000);
		return () => {
			clearTimeout(timeOut);
		};
	}, [state.showAlert]);

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

export default StartGametBox;
