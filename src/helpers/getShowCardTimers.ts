import { DifficultType } from '../types/difficult';

const DELAY_SHOW_CARD_TIME: number = 500;
const TIME_SHIFT_MULTIPLIER: number = 80;
const SHOW_CARD_TIME: number = 5000;
const DELAY_BEFORE_MODAL: number = 1000;

type getShowCardTimersType = {
	openCard: number;
	closeCard: number;
	DELAY_BEFORE_MODAL: number;
};

export const getShowCardTimers = (
	cardIndex: number,
	difficult: DifficultType
): getShowCardTimersType => {
	const timeShift = cardIndex * TIME_SHIFT_MULTIPLIER;
	const openCard = DELAY_SHOW_CARD_TIME + timeShift;
	const closeCard =
		DELAY_SHOW_CARD_TIME +
		SHOW_CARD_TIME +
		DELAY_SHOW_CARD_TIME * difficult -
		timeShift;

	return { openCard, closeCard, DELAY_BEFORE_MODAL };
};
