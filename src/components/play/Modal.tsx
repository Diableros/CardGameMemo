import { useContext } from 'react';
import { AppContext, AppContextType } from '../../context/AppContext';
import { GameStatus } from '../../types/gameStatus';
import RestartButton from './RestarsButton';
import { getClockTime, getRealTime } from '../../helpers/getGameTime';

type ModalPropsType = {
	gameStatus: GameStatus.win | GameStatus.lose;
};

type GameStatusDecodeType = {
	win: string;
	lose: string;
};

const backgroundImage: GameStatusDecodeType = {
	win: 'win.png',
	lose: 'lose.png',
};

const endGameTitle: GameStatusDecodeType = {
	win: 'Вы выиграли!',
	lose: 'Вы проиграли!',
};

const Modal = ({ gameStatus }: ModalPropsType) => {
	const { state } = useContext<AppContextType>(AppContext);

	const { min, sec } = getClockTime(getRealTime(state.gameStartTime));

	return (
		<div className="modal">
			<div className="modal__content-box">
				<div
					className="modal__img"
					style={{
						background: `url(../../img/${backgroundImage[gameStatus]})`,
					}}
				/>
				<h1 className="modal__title">{endGameTitle[gameStatus]}</h1>
				<div className="modal__time-box">
					<h1 className="modal__time-title">Затраченное время:</h1>
					<p className="modal__time">
						{min}.{sec}
					</p>
				</div>
				<RestartButton title={'Играть снова'} />
			</div>
		</div>
	);
};

export default Modal;
