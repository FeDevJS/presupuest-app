import React from 'react';
import { Column } from './Column.js';
import './styles/budget-sheet.css';
export const BudgetSheet = () => {
	return(
		<div className='budget-sheet'>
			<Column colClass='articles-col' colTitle='Artículos' colClassName='Articles' />
			<Column colClass='quantity-col' colTitle='Cantidad' colClassName='Quantity' />
			<Column colClass='buy-price-col' colTitle='p/Compra' colClassName='Buy-price' />
			<Column colClass='sell-price-col' colTitle='p/venta' colClassName='Sell-price' />
			<Column colClass='profits-col' colTitle='Ganancias' colClassName='Profits' />
		</div>
	);
};