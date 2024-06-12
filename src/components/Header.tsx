import * as React from 'react';

interface HeaderProps {
	title: string;
	description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
	return (
		<header className='space-y-4 max-w-xl'>
			<h1 className='text-5xl'>{title}</h1>
			<p className='text-zinc-500'>{description}</p>
		</header>
	);
};

export default Header;
