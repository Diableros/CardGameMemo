import { ReactNode } from 'react';
import { GameProvider } from './GameContext';

const Providers = ({ children }: { children: ReactNode }) => {
	return <GameProvider>{children}</GameProvider>;
};

export default Providers;
