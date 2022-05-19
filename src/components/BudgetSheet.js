import React from 'react';
import { Column } from './Column.js';
import './styles/budget-sheet.css';
export const BudgetSheet = () => {
	return(
		<div className='budget-sheet'>
			<Column colClass='articles-col' colTitle='Articles' />
			<Column colClass='quantity-col' colTitle='Quantity' />
			<Column colClass='buy-price-col' colTitle='Buy-price' />
			<Column colClass='sell-price-col' colTitle='Sell-price' />
			<Column colClass='profits-col' colTitle='Profits' />
		</div>
	);
};