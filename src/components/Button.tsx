import * as React from 'react';

import { ArrowUpRight } from 'lucide-react';
import { cn } from '../libs/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant, children, className, ...props }) => {
	return (
		<button
			{...props}
			className={cn(
				'w-full py-3 text-sm uppercase inline-flex items-center justify-center group',
				'disabled:opacity-50 disabled:cursor-not-allowed',
				variant === 'primary' && 'bg-primary text-white border-transparent',
				variant === 'secondary' && 'bg-transparent text-primary border border-primary',
				className
			)}>
			<ArrowUpRight className='mr-2 transition-all duration-200 opacity-0 size-5 group-hover:opacity-100' />
			<span className='-ml-6 transition-all duration-200 group-hover:ml-0'>{children}</span>
		</button>
	);
};

export default Button;
