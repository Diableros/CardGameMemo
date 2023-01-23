import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GameProviders from './context/GameProviders';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<GameProviders>
			<App />
		</GameProviders>
	</React.StrictMode>
);
