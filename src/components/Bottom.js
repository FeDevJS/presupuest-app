import React from 'react';
import './styles/bottom.css';
export const Bottom = (props) => {
	return (
		<>
			<section className='main-budget-container__bottom'>
				{props.children}
			</section>
		</>
	);
};