import { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LobbyScreen from 'screens/lobbyScreen/LobbyScreen';
import PlayScreen from 'screens/playScreen/PlayScreen';
import NotFoundScreen from 'screens/notFoundScreen/notFoundScreen';

const Router = ({ children }: { children: ReactNode }) => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: children,
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

	return <RouterProvider router={router} />;
};

export default Router;
