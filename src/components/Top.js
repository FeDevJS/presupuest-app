import React, { useContext } from 'react';
import { Button } from './Button';
import { FieldContext } from './contexts/FieldProvider';
import './styles/top.css';
export const Top = () => {
	const { budgetValue, handleActive, handleDeleteField } = useContext(FieldContext);
	let givenClass = !budgetValue ? "budget--red" : budgetValue ? "budget--green" : null;
	return(
		<>
			<section className='main-budget-container__top'>
				<article className='main-top__leftSide'>
					<p className='budget__container'>
						<span className='budget__dollarSign'>$</span>
						<span className={`budget ${givenClass}`}>{budgetValue || 0}</span>
					</p>
				</article>
				<article className='main-top__rightSide'>
					<Button class="set--btn" innerText="+" fOnClick={handleActive} />
					<Button class="delete--btn" innerText="C" fOnClick={handleDeleteField} />
				</article>
			</section>
		</>
	);
};