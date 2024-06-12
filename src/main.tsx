import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	</React.StrictMode>
);
