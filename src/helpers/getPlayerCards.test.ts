import { getPlayerCards, difficultMultiplier } from './getPlayerCards';
import { difficultButtonsArr } from 'screens/lobbyScreen/components/startGameBox/StartGameBox';

const CARD_IN_PAIR = 2;

it.each(difficultButtonsArr)(
	`Hands out player cards by difficult: %s`,
	(diff) => {
		/*eslint no-undef: "off"*/ expect(getPlayerCards(diff)).toHaveLength(
			diff * difficultMultiplier * CARD_IN_PAIR
		);
	}
);
