import { useRef, useLayoutEffect } from 'react';
import { fadeInPlayScreenTween } from 'helpers/animations';
import Timer from './components/timer/Timer';
import RestartButton from './components/restartButton/RestartButton';
import PlayCardGroup from './components/playCardGroup/PlayCardGroup';
import './playScreen.scss';
import { GameStatus } from 'types/gameStatus';
import { useGameContext } from 'context/GameContext';
import Blocker from './components/blocker/Blocker';
import Modal from './components/modal/Modal';

const PlayScreen = () => {
	const { gameStatus } = useGameContext();

	const divRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const anim = fadeInPlayScreenTween(divRef.current);

		return () => {
			anim.kill();
		};
	}, []);

	return (
		<>
			<div ref={divRef} className="game-screen">
				<header className="game-screen__header">
					<Timer />
					<RestartButton title="Начать заново" />
				</header>
				<section className="playfield__card-box">
					<PlayCardGroup />
				</section>
				{(() => {
					switch (gameStatus) {
						case GameStatus.preGame:
							return <Blocker />;

						case GameStatus.win:
							return <Modal gameStatus={GameStatus.win} />;

						case GameStatus.lose:
							return <Modal gameStatus={GameStatus.lose} />;

						default:
							return null;
					}
				})()}
			</div>
		</>
	);
};

export default PlayScreen;
