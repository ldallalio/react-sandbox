import { useState, useEffect, useRef, useMemo } from 'react';

function UseMemoExample() {
	const [number, setNumber] = useState(1);
	// eslint-disable-next-line no-unused-vars
	const [inc, setInc] = useState(0);

	const renders = useRef(1);

	const sqrt = useMemo(() => {
		getSqrt(number);
	}, [number]);

	useEffect(() => {
		renders.current = renders.current + 1;
	});

	const onClick = () => {
		setInc((prevState) => {
			console.log(prevState + 1);
			return prevState + 1;
		});
	};

	return (
		<div>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				className='form-control w-25'
			/>
			<h2 className='my-3'>
				The sqrt of {number} is {sqrt}
			</h2>
			<button className='btn btn-primary' onClick={onClick}>
				Re Render
			</button>
			<h3>Renders{renders.current}</h3>
		</div>
	);
}

function getSqrt(number) {
	for (let i = 0; i < number; i++) {
		console.log('Expensive Function Called');
	}
	return Math.sqrt(number);
}

export default UseMemoExample;
