import Alert from '../lobbyScreen/components/alert/Alert';
import StartGameBox from '../lobbyScreen/components/startGameBox/StartGameBox';
import './lobbyScreen.scss';
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LobbyScreen = () => {
	const [showAlertState, setShowAlertState] = useState<boolean>(false);

	const divRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const anim = gsap.fromTo(
			divRef.current,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 2,
			}
		);

		return () => {
			anim.kill();
		};
	}, [divRef]);

	return (
		<div ref={divRef} className="start-screen">
			<h1 className="start-screen__header">Выбери сложность</h1>
			<StartGameBox
				showAlert={() => {
					setShowAlertState(true);
				}}
			/>
			<Alert
				showAlert={showAlertState}
				hideAlert={() => {
					setShowAlertState(false);
				}}
			>
				Выберите сложность!
			</Alert>
		</div>
	);
};

export default LobbyScreen;
