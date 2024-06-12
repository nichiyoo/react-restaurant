import * as React from 'react';

import { Star } from 'lucide-react';
import { cn } from '../libs/utils';

interface RatingProps {
	value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
	return (
		<div className='flex items-center space-x-2'>
			{[...Array(5).keys()].map((_, i) => (
				<Star key={i} className={cn('size-5 text-primary', i < value && 'fill-current')} strokeWidth={1} />
			))}
		</div>
	);
};

export default Rating;
