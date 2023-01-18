import { ReactNode, useReducer } from 'react';
import { AppContext } from './AppContext';
import initGameState from './initGameState';
import { Reducer } from '../reducer/Reducer';
import { ReducerType } from '../types/reducer';

type PropsType = {
	children: ReactNode;
};

const Providers = ({ children }: PropsType) => {
	const [state, dispatch] = useReducer<ReducerType>(Reducer, initGameState());

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default Providers;
