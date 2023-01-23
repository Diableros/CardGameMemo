import { CardFaceType, CardIdentType, Rank, Suit } from '../types/cardItem';

const ranks: Rank[] = [...Object.values(Rank)];
const suits: Suit[] = [...Object.values(Suit)];

const difficultMultiplier: number = 3;

export const getPlayerCards = (difficult: number): CardFaceType[] => {
	if (!difficult) return [];

	const pairsCardsQuantity: number = difficult * difficultMultiplier;

	const cardDeck: CardIdentType[] = [];

	ranks.forEach((rank) => {
		suits.forEach((suit) => {
			cardDeck.push({ R: rank, S: suit });
		});
	});

	const playerCardPairs: CardIdentType[] = [];

	while (playerCardPairs.length < pairsCardsQuantity) {
		const receivedCard: CardIdentType[] = cardDeck.splice(
			Math.floor(Math.random() * cardDeck.length),
			1
		);

		playerCardPairs.push(...receivedCard);
	}

	const playerCards: CardIdentType[] = [...playerCardPairs, ...playerCardPairs];

	const shuffledPlayerCardsIdents: CardIdentType[] = playerCards.sort(
		() => Math.random() - 0.5
	);

	const shuffledPlayerCardsItems = shuffledPlayerCardsIdents.map(
		(cardIdent, index) => ({ id: index, face: cardIdent, isOpen: true })
	);

	return shuffledPlayerCardsItems;
};
