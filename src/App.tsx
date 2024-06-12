import * as React from 'react';

function App() {
	const [count, setCount] = React.useState(0);

	return (
		<>
			<span>Count: {count}</span>
			<button onClick={() => setCount((count) => count + 1)}>Increment</button>
			<h1 className='text-red-500'>Hello CodeSandbox</h1>
		</>
	);
}

export default App;
