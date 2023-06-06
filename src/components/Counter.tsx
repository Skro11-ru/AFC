import cls from './Counter.module.scss';

import { useState } from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState(0);
	const increment = () => {
		setCounter(counter + 1);
	};
	return (
		<div>
			<p>{counter}</p>
			<button className={cls.btn} onClick={increment}>
				Increment
			</button>
		</div>
	);
};
