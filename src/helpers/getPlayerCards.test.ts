import { DifficultType } from 'types/difficult';
import { getPlayerCards, difficultMultiplier } from './getPlayerCards';

const cardInPair = 2;

it('Hands out player cards by difficult: 1', () => {
	const difficult: DifficultType = 1;
	/*eslint no-undef: "off"*/ expect(getPlayerCards(difficult)).toHaveLength(
		difficult * difficultMultiplier * cardInPair
	);
});

it('Hands out player cards by difficult: 2', () => {
	const difficult: DifficultType = 2;
	/*eslint no-undef: "off"*/ expect(getPlayerCards(difficult)).toHaveLength(
		difficult * difficultMultiplier * cardInPair
	);
});

it('Hands out player cards by difficult: 3', () => {
	const difficult: DifficultType = 3;
	/*eslint no-undef: "off"*/ expect(getPlayerCards(difficult)).toHaveLength(
		difficult * difficultMultiplier * cardInPair
	);
});
