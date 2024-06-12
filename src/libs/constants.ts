import { Category } from './type';

export const categories: Array<Category> = ['japanese', 'thai', 'seafood', 'italians', 'mexican', 'indian'];
export const prices = {
	'0 - 50': { min: 0, max: 50 },
	'50 - 100': { min: 50, max: 100 },
	'100 - 500': { min: 100, max: 500 },
	'500 - higher': { min: 500, max: null },
};
