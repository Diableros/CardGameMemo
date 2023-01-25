import { CardItemType, CardFaceType, Rank, Suit } from '../types/cardItem';

const ranks: Rank[] = [...Object.values(Rank)];
const suits: Suit[] = [...Object.values(Suit)];

const difficultMultiplier: number = 3;

export const getPlayerCards = (difficult: number): CardItemType[] => {
	if (!difficult) return [];

	const pairsCardsQuantity: number = difficult * difficultMultiplier;

	const cardDeck: CardFaceType[] = [];

	ranks.forEach((rank) => {
		suits.forEach((suit) => {
			cardDeck.push({ R: rank, S: suit });
		});
	});

	const playerCardPairs: CardFaceType[] = [];

	while (playerCardPairs.length < pairsCardsQuantity) {
		const receivedCard: CardFaceType[] = cardDeck.splice(
			Math.floor(Math.random() * cardDeck.length),
			1
		);

		playerCardPairs.push(...receivedCard);
	}

	const playerCards: CardFaceType[] = [...playerCardPairs, ...playerCardPairs];

	const shuffledPlayerCardsIdents: CardFaceType[] = playerCards.sort(
		() => Math.random() - 0.5
	);

	const shuffledPlayerCardsItems = shuffledPlayerCardsIdents.map(
		(cardIdent, index) => ({ id: index, face: cardIdent, isOpen: false })
	);

	return shuffledPlayerCardsItems;
};
