import { CardItemType, Rank, Suit } from '../types/cardItem';

const ranks: Rank[] = [...Object.values(Rank)];
const suits: Suit[] = [...Object.values(Suit)];

const difficultMultiplier: number = 3;

export const getPlayerCards = (difficult: number): CardItemType[] => {
	if (!difficult) return [];

	const pairsCardsQuantity: number = difficult * difficultMultiplier;

	const cardDeck: CardItemType[] = [];

	ranks.forEach((rank) => {
		suits.forEach((suit) => {
			cardDeck.push({ R: rank, S: suit });
		});
	});

	const playerCardPairs: Set<CardItemType> = new Set();

	while (playerCardPairs.size < pairsCardsQuantity) {
		const receivedCard: CardItemType =
			cardDeck[Math.floor(Math.random() * cardDeck.length)];

		playerCardPairs.add(receivedCard);
	}

	const playerCards: CardItemType[] = [];

	Array.from(playerCardPairs, (elem) => playerCards.push(elem, elem));

	const shuffledPlayerCards: CardItemType[] = playerCards.sort(
		() => Math.random() - 0.5
	);

	return shuffledPlayerCards;
};
