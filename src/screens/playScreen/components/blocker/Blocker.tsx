import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { countDownTween } from 'helpers/animations';
import './blocker.scss';
import { useGameContext } from 'context/GameContext';
import { GameAction } from 'types/gameAction';
import { GameStatus } from 'types/gameStatus';
import { SHOW_CARD_TIME } from 'helpers/getShowCardTimers';

const Blocker = () => {
	const { dispatch } = useGameContext();
	const divRef = useRef<HTMLDivElement>(null);
	const [countDown, setCountDown] = useState<number>(SHOW_CARD_TIME / 1000);

	useEffect(() => {
		if (countDown < 0) {
			dispatch({
				type: GameAction.SetGameStatus,
				payload: GameStatus.game,
			});
		}
		const interval = setTimeout(() => {
			setCountDown(countDown - 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [countDown]);

	useLayoutEffect(() => {
		const anim = countDownTween(divRef.current);
		return () => {
			anim.kill();
		};
	}, [countDown]);

	return (
		<div className="blocker">
			<h1 ref={divRef} className="blocker__message">
				{String(countDown)}
			</h1>
		</div>
	);
};

export default Blocker;
