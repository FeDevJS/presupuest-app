import React from 'react';
import { Bottom } from './Bottom';
import { Top } from './Top';
export const MainBudgetContainer = () => {
	return(
		<>
			<div className='main__budget__container'>
				<Top />
				<Bottom />
			</div>
		</>
	);
};