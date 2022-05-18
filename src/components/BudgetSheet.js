import React from 'react';
import { Column } from './Column.js';
export const BudgetSheet = () => {
	return(
		<>
			<Column colClass='articles-col' colTitle='Articles' />
			<Column colClass='quantity-col' colTitle='Quantity' />
			<Column colClass='buy-price-col' colTitle='P.P.A' />
			<Column colClass='sell-price-col' colTitle='S.P.A' />
			<Column colClass='profits-col' colTitle='Profits' />
		</>
	);
};