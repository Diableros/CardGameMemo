import { ReactNode, useReducer } from 'react';
import { GameContext } from './GameContext';
import initGameState from './initGameState';
import { Reducer } from '../reducer/Reducer';
import { ReducerType } from '../types/reducer';

type PropsType = {
	children: ReactNode;
};

const Providers = ({ children }: PropsType) => {
	const [state, dispatch] = useReducer<ReducerType>(Reducer, initGameState);

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
};

export default Providers;
