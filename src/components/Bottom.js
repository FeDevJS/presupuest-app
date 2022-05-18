import React from 'react';
import { BudgetSheet } from './BudgetSheet';
import { ModalField } from './ModalField';
import './styles/bottom.css';
export const Bottom = () => {
	return (
		<>
			<section className='main-budget-container__bottom'>
				<BudgetSheet />
				<ModalField />
			</section>
		</>
	);
};