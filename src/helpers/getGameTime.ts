import { GameTimeType } from 'types/gameTime';

const getPadTime = (time: number): string => {
	return time.toString().padStart(2, '0');
};

const millisecInSecond = 1000;

export const getRealTime = (seconds: GameTimeType) => {
	return Math.floor(Date.now() / millisecInSecond - seconds);
};

export const getClockTime = (
	seconds: GameTimeType
): { min: string; sec: string } => {
	const min = getPadTime(Math.floor(seconds / 60));
	const sec = getPadTime(seconds % 60);

	return { min, sec };
};
