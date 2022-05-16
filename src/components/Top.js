import React from 'react';
import { Button } from './Button';
import './styles/top.css';
export const Top = (props) => {
	let givenClass = !props.fieldValue ? "budget--red" : props.fieldValue ? "budget--green" : null;
	return(
		<>
			<section className='main-budget-container__top'>
				<article className='main-top__leftSide'>
					<p className='budget__container'>
						<span className='budget__dollarSign'>$</span>
						<span ref={props.budget} className={`budget ${givenClass}`}>{props.fieldValue || 0}</span>
					</p>
				</article>
				<article className='main-top__rightSide'>
					<Button class="set--btn" innerText="+" fOnClick={props.setActive} />
					<Button class="delete--btn" innerText="C" fOnClick={props.deleteField} />
				</article>
			</section>
		</>
	);
};