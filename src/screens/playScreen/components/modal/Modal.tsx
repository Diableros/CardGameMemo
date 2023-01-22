import { useGameContext } from '../../../../context/GameContext';
import { GameStatus } from '../../../../types/gameStatus';
import RestartButton from '../restartButton/RestartButton';
import { getClockTime, getRealTime } from '../../../../helpers/getGameTime';
import winImg from '../../../../img/win.png';
import loseImg from '../../../../img/lose.png';
import './modal.scss';

type ModalPropsType = {
	gameStatus: GameStatus.win | GameStatus.lose;
};

type GameStatusDecodeType = {
	win: string;
	lose: string;
};

const backgroundImage: GameStatusDecodeType = {
	win: winImg,
	lose: loseImg,
};

const endGameTitle: GameStatusDecodeType = {
	win: 'Вы выиграли!',
	lose: 'Вы проиграли!',
};

const Modal = ({ gameStatus }: ModalPropsType) => {
	const { gameStartTime } = useGameContext();

	const { min, sec } = getClockTime(getRealTime(gameStartTime));

	return (
		<div className="modal">
			<div className="modal__content-box">
				<img className="modal__img" src={backgroundImage[gameStatus]} />
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
