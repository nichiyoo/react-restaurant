import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../layouts/App';
import NotFound from '../pages/errors/NotFound';
import RestaurantDetail from '../pages/restaurants/RestaurantDetail';
import RestaurantList from '../pages/restaurants/RestaurantList';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<RestaurantList />} />
					<Route path='/:id' element={<RestaurantDetail />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
