import * as React from 'react';

import type { Category, Restaurant } from '../../libs/type';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { PriceBracket } from '../../libs/type';
import { categories } from '../../libs/constants';
import { prices } from '../../libs/constants';
import useRestaurants from '../../hooks/useRestaurants';

interface RestaurantListProps {
	//
}

const RestaurantList: React.FC<RestaurantListProps> = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const [price, setPrice] = React.useState<PriceBracket | null>(null);
	const [category, setCategory] = React.useState<Category | null>(null);

	const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useRestaurants({
		category,
	});

	const restaurants = React.useMemo(() => {
		if (!data) return [];
		return data.pages
			.reduce((acc, group) => acc.concat(group), [])
			.filter((restaurant: Restaurant) => (open ? restaurant.open : true))
			.filter((restaurant: Restaurant) => {
				if (!price) return true;
				const range = prices[price];
				return restaurant.price >= range.min && (range.max === null ? true : restaurant.price <= range.max);
			});
	}, [data, open, price]);

	const isDefault = React.useMemo(() => {
		return !open && !price && !category;
	}, [open, price, category]);

	const resetFilters = () => {
		setOpen(false);
		setPrice(null);
		setCategory(null);
	};

	return (
		<>
			<Header
				title='Restaurants'
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae nulla inventore ea aspernatur debitis delectus.'
			/>

			<section
				id='filter'
				className='flex flex-col items-center justify-between py-6 mt-16 space-y-4 border-t border-b lg:flex-row border-zinc-200'>
				<div className='flex flex-col w-full space-y-4 lg:space-y-0 lg:space-x-4 lg:items-center lg:flex-row'>
					<span>Filter By</span>

					<label htmlFor='open' className='flex items-center p-2 space-x-2 lg:w-40 '>
						<input
							className='form-checkbox checked:text-primary checked:ring-primary focus:ring-primary'
							type='checkbox'
							checked={open}
							onChange={(e) => setOpen(e.target.checked)}
						/>
						<span>Open Now</span>
					</label>

					<label htmlFor='price'>
						<span className='sr-only'>Price</span>
						<select
							className='w-full p-2 border-b lg:w-40 border-zinc-200 focus:ring-primary focus:border-transparent'
							value={price ?? ''}
							onChange={(e) => setPrice(e.target.value === '' ? null : (e.target.value as PriceBracket))}>
							<option value=''>Price</option>

							{Object.keys(prices).map((p) => (
								<option key={p} value={p}>
									{p}
								</option>
							))}
						</select>
					</label>

					<label htmlFor='category'>
						<span className='sr-only'>Category</span>
						<select
							className='w-full p-2 border-b lg:w-40 border-zinc-200 focus:ring-primary focus:border-transparent'
							value={category ?? ''}
							onChange={(e) => setCategory(e.target.value === '' ? null : (e.target.value as Category))}>
							<option value=''>Category</option>

							{categories.map((c) => (
								<option key={c} value={c}>
									{c.charAt(0).toUpperCase() + c.slice(1)}
								</option>
							))}
						</select>
					</label>
				</div>

				<div className='w-full lg:max-w-32'>
					<Button variant='secondary' onClick={resetFilters} disabled={isDefault}>
						Refresh
					</Button>
				</div>
			</section>

			<div className='mt-16'>
				{isFetchingNextPage && <p className='text-gray-500'>Loading...</p>}
				{error && <p className='text-red-500'>{error.message}</p>}
			</div>

			<section id='restaurants' className='mt-16'>
				<h2 className='mb-8 text-3xl'>All restaurants</h2>

				<div className='grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4'>
					{restaurants?.map((restaurant: Restaurant) => (
						<Card key={restaurant.id} restaurant={restaurant} />
					))}
				</div>
			</section>

			{hasNextPage && (
				<section id='pagination' className='w-full mt-16'>
					<div className='max-w-md mx-auto'>
						<Button variant='secondary' onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
							Load more
						</Button>
					</div>
				</section>
			)}
		</>
	);
};

export default RestaurantList;
