import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import { getClockTime, getRealTime } from '../../helpers/getGameTime';
import { GameStatus } from '../../types/gameStatus';

const Timer = () => {
	const [time, setTime] = useState<number>(0);
	const { state } = useContext(GameContext);

	useEffect(() => {
		const interval = setInterval(() => {
			state.gameStatus === GameStatus.game &&
				setTime(getRealTime(state.gameStartTime));
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [state.gameStatus]);

	const { min, sec } = getClockTime(time);

	return (
		<section className="game-screen__timer timer">
			<div className="timer__titles">
				<div className="timer__title">min</div>
				<div className="timer__title">sec</div>
			</div>
			<div className="timer__digits">
				{min}.{sec}
			</div>
		</section>
	);
};

export default Timer;
