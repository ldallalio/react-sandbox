/* eslint-disable no-unused-vars */
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function CustomHookExample2() {
	const [task, setTask] = useLocalStorage('task', '');
	return (
		<div>
			<form className='w-50'>
				<div className='mb-3'>
					<label className='form-label'>Task</label>
					<input
						className='form-control'
						type='text'
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
}

export default CustomHookExample2;
