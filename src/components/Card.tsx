import * as React from 'react';

import Button from './Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import type { Restaurant } from '../libs/type';
import { cn } from '../libs/utils';

interface CardProps {
	restaurant: Restaurant;
}

const Card: React.FC<CardProps> = ({ restaurant }) => {
	return (
		<div className='relative flex flex-col pb-16 space-y-4'>
			<div className='overflow-hidden aspect-thumbnail bg-zinc-300'>
				<img
					src={restaurant.image}
					alt={restaurant.name}
					className='object-cover object-center w-full h-full '
				/>
			</div>

			<h3 className='font-medium'>{restaurant.name}</h3>

			<Rating value={restaurant.rating} />

			<div className='flex items-center justify-between text-xs uppercase'>
				<div className='flex items-center space-x-2'>
					<span>{restaurant.category}</span>
					<span>-</span>
					<span>{restaurant.price}</span>
				</div>

				<div className='flex items-center space-x-2 '>
					<span className={cn('size-2 rounded-full', restaurant.open ? 'bg-green-500' : 'bg-red-500')}></span>
					<span>{restaurant.open ? 'open now' : 'closed'}</span>
				</div>
			</div>

			<Link to={'/' + restaurant.id} className='absolute bottom-0 w-full'>
				<Button variant='primary'>Learn More</Button>
			</Link>
		</div>
	);
};

export default Card;
