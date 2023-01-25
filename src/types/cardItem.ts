export enum Rank {
	Six = '6',
	Seven = '7',
	Eight = '8',
	Nine = '9',
	Ten = 'T',
	Jack = 'J',
	Queen = 'Q',
	King = 'K',
	Ace = 'A',
}

export enum Suit {
	Hearts = 'H',
	Clubs = 'C',
	Speads = 'S',
	Diamonds = 'D',
}

export type CardFaceType = { R: Rank; S: Suit };

export type CardItemType = {
	id: number;
	face: CardFaceType;
	isOpen: boolean;
};
