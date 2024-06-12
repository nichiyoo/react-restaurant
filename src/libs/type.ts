import { prices } from './constants';

export type Review = {
	id: string;
	name: string;
	rating: number;
	text: string;
};

export type Category = 'japanese' | 'thai' | 'seafood' | 'italians' | 'mexican' | 'indian';

export type Restaurant = {
	id: string;
	name: string;
	category: Category;
	price: number;
	rating: number;
	open: boolean;
	image: string;
	location: {
		lat: number;
		lng: number;
	};
	reviews: Review[];
};
export type PriceBracket = keyof typeof prices;
