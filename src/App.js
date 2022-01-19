import { useState, useEffect, useRef } from 'react';

import UseRefExample2 from './components/UseRefExample2';

function App() {
	const [name, setName] = useState('');
	const renders = useRef(1);
	const prevName = useRef('');

	useEffect(() => {
		renders.current = renders.current + 1;
		prevName.current = name;
	}, [name]);

	return (
		<div className='container mt-5 mb-5'>
			<h1>Renders: {renders.current} </h1>
			<h2>Prev Name State: {prevName.current}</h2>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='form-control mb-3'
			/>
		</div>
	);
}

export default App;
