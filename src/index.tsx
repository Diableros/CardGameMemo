import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GameProviders from 'context/GameProviders';
import Router from 'router/Router';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<GameProviders>
			<Router>
				<App />
			</Router>
		</GameProviders>
	</React.StrictMode>
);
