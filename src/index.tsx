import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import GameProviders from './context/GameProviders';
import LobbyScreen from './screens/lobbyScreen/LobbyScreen';
import NotFoundScreen from './screens/notFoundScreen/notFoundScreen';
import PlayScreen from './screens/playScreen/PlayScreen';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'lobby',
				element: <LobbyScreen />,
			},
			{
				path: 'play',
				element: <PlayScreen />,
			},
		],
		errorElement: <NotFoundScreen />,
	},
]);

root.render(
	<React.StrictMode>
		<GameProviders>
			<RouterProvider router={router} />
		</GameProviders>
	</React.StrictMode>
);
