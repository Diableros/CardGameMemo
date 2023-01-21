import { ReactNode } from 'react';
import { CardProvider } from './CardContext';
import { GameProvider } from './GameContext';

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<GameProvider>
			<CardProvider>{children}</CardProvider>
		</GameProvider>
	);
};

export default Providers;
