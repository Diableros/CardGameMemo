import './notFoundScreen.scss';
import { Link } from 'react-router-dom';
import { useRef, useLayoutEffect } from 'react';
import fadeInScreen from 'helpers/fadeInScreenAnimaiton';

const NotFoundScreen = () => {
	const divRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const anim = fadeInScreen(divRef.current);

		return () => {
			anim.kill();
		};
	});

	return (
		<main ref={divRef} className="main">
			<div className="not-found">
				<h1 className="not-found__header">404</h1>
				<h2 className="not-found__title">Запрашиваемая страница не найдена!</h2>
				<Link to="lobby" className="not-found__to-start-btn hover-scale">
					В начало
				</Link>
			</div>
		</main>
	);
};

export default NotFoundScreen;
