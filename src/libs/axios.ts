import base from 'axios';

const axios = base.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 10000,
});

export default axios;
