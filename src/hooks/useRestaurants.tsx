import { Category } from '../libs/type';
import React from 'react';
import axios from '../libs/axios';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseRestaurantsProps {
	category: Category | null;
}

const useRestaurants = ({ category }: UseRestaurantsProps) => {
	const limit = React.useRef(8);

	const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
		queryKey: ['restaurants', category],
		queryFn: ({ pageParam }) =>
			axios
				.get('/restaurants', {
					params: {
						category: category === null ? undefined : category,
						_limit: limit.current,
						_page: pageParam,
					},
				})
				.then((res) => res.data),
		initialPageParam: 1,
		getNextPageParam: (lastPage, _, lastPageParam) => {
			if (lastPage.length === 0) return undefined;
			return lastPageParam + 1;
		},
	});

	return {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	};
};

export default useRestaurants;
