import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import './blocker.scss';
import { useGameContext } from 'context/GameContext';
import { GameAction } from 'types/gameAction';
import { GameStatus } from 'types/gameStatus';
import {
	DELAY_BEFORE_SHOW_CARD,
	SHOW_CARD_TIME,
} from 'helpers/getShowCardTimers';

const Blocker = () => {
	const { dispatch } = useGameContext();
	const divRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const anim = gsap.to(divRef.current, {
			color: '#fff',
			delay: DELAY_BEFORE_SHOW_CARD / 1000,
			repeat: 4,
			duration: 1,
			onComplete: () => {
				dispatch({
					type: GameAction.SetGameStatus,
					payload: GameStatus.game,
				});
			},
		});
		return () => {
			anim.kill();
		};
	}, []);

	return (
		<div className="blocker">
			<h1 ref={divRef} className="blocker__message">
				Запомните карты!
			</h1>
		</div>
	);
};

export default Blocker;
