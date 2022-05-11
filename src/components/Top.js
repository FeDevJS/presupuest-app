import React, { useState, useRef } from 'react';
import { Button } from './Button';
import './styles/top.css';
export const Top = () => {
	const [currentBudget, setCurrentBudget] = useState(null);
	const budget = useRef(null);
	const handleBudget = () => {
		
	};
	const handleRestartBudget = () => null;
	return(
		<>
			<section className='main-budget-container__top'>
				<article className='main-top__leftSide'>
					<p className='budget__container'>
						<span className='budget__dollarSign'>$</span>
						<span ref={budget} className='budget'>{currentBudget || 0}</span>
					</p>
				</article>
				<article className='main-top__rightSide'>
					<Button class="set--btn" innerText="+" fOnClick={handleBudget} />
					<Button class="delete--btn" innerText="C" fOnClick={handleRestartBudget} />
				</article>
			</section>
		</>
	);
};