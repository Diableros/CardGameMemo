import { CardActionType } from './cardAction';
import { CardStateType } from './cardState';

export type CardReducerType = (
	cardState: CardStateType,
	cardAction: CardActionType
) => CardStateType;
