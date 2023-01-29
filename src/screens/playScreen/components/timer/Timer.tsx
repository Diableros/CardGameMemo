import { useEffect, useState } from 'react';
import { useGameContext } from 'context/GameContext';
import { getClockTime, getRealTime } from 'helpers/getGameTime';
import { GameStatus } from 'types/gameStatus';
import './timer.scss';

const Timer = () => {
	const [time, setTime] = useState<number>(0);
	const { gameStatus, gameStartTime } = useGameContext();

	useEffect(() => {
		const interval = setInterval(() => {
			gameStatus === GameStatus.game && setTime(getRealTime(gameStartTime));
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [gameStatus]);

	const { min, sec } = getClockTime(time);

	return (
		<section className="timer">
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
