import { DifficultType } from '../types/difficult';

const delayShowCardTime: number = 500;
const timeShiftMultiplier: number = 80;
const showCardTime: number = 5000;
const delayBeforeModal: number = 1000;

type getShowCardTimersType = {
	rise: number;
	dawn: number;
	delayBeforeModal: number;
};

export const getShowCardTimers = (
	cardIndex: number,
	difficult: DifficultType
): getShowCardTimersType => {
	const timeShift = cardIndex * timeShiftMultiplier;
	const rise = delayShowCardTime + timeShift;
	const dawn =
		delayShowCardTime +
		showCardTime +
		delayShowCardTime * difficult -
		timeShift;

	return { rise, dawn, delayBeforeModal };
};
