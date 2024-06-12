import * as React from 'react';

import { Link, Navigate, useParams } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import { Review } from '../../libs/type';
import useDetail from '../../hooks/useDetail';

interface RestaurantDetailProps {
	//
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = () => {
	const { id } = useParams();
	const { detail, isLoading, isError } = useDetail({
		id: id ?? 'empty',
	});

	if (!id) return <Navigate to='/' />;

	return (
		<>
			<Header
				title='Restaurant Detail'
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae nulla inventore ea aspernatur debitis delectus.'
			/>

			<div className='mt-16'>
				{isLoading && <p className='text-gray-500'>Loading...</p>}
				{isError && <p className='text-red-500'>Error</p>}
			</div>

			{detail && (
				<>
					<section className='flex flex-col items-center justify-between py-6 mt-16 space-y-4 border-t border-b lg:flex-row border-zinc-200 lg:space-y-0'>
						<div className='flex flex-col w-full space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8 6 '>
							<div className='flex items-center space-x-2'>
								<span>Category:</span>
								<span>{detail.category.charAt(0).toUpperCase() + detail.category.slice(1)}</span>
							</div>

							<div className='flex items-center space-x-2'>
								<span>Price:</span>
								<span>{detail.price}</span>
							</div>

							<div className='flex items-center space-x-2'>
								<span>Open:</span>
								<span>{detail.open ? 'Yes' : 'No'}</span>
							</div>

							<div className='flex items-center space-x-2'>
								<span>Rating:</span>
								<Rating value={detail.rating} />
							</div>
						</div>

						<div className='w-full lg:max-w-32'>
							<Link to='/'>
								<Button variant='secondary'>Back</Button>
							</Link>
						</div>
					</section>

					<section className='mt-16'>
						<h2 className='mb-8 text-2xl font-bold'>{detail.name}</h2>
						<div className='w-full overflow-hidden aspect-video bg-zinc-300'>
							<img
								src={detail.image}
								alt='Restaurant Image'
								className='object-cover object-center w-full h-full '
							/>
						</div>
					</section>

					<section className='mt-16'>
						<h2 className='mb-8 text-2xl font-bold'>Reviews</h2>

						<div className='grid gap-8 lg:grid-cols-2'>
							{detail.reviews.map((review: Review) => (
								<div className='flex flex-col p-8 space-y-4 border'>
									<h3>{review.name}</h3>
									<p>{review.text}</p>
									<Rating value={review.rating} />
								</div>
							))}
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default RestaurantDetail;
