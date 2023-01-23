import './notFoundScreen.scss';
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
	return (
		<main className="main">
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
