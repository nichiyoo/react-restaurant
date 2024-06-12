import axios from '../libs/axios';
import { useQuery } from '@tanstack/react-query';

interface useDetailProps {
	id: string;
}

const useDetail = ({ id }: useDetailProps) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['restaurant', id],
		queryFn: () => axios.get(`/restaurants/${id}`).then((res) => res.data),
	});

	return {
		detail: data,
		isLoading,
		isError,
	};
};

export default useDetail;
