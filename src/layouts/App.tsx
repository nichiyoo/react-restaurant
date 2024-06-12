import * as React from 'react';

import { Outlet } from 'react-router-dom';

interface LayoutProps {
	//
}

const Layout: React.FC<LayoutProps> = () => {
	return (
		<main className='w-full min-h-screen px-8 mx-auto bg-white max-w-7xl text-zinc-600'>
			<div className='py-20'>
				<Outlet />
			</div>
		</main>
	);
};

export default Layout;
