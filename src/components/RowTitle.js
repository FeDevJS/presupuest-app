import React from 'react';
import "./styles/row-title.css";

export const RowTitle = (props) => {
	return (
		<h3 className={`row__title ${props.titleClass}`}>{props.title}</h3>
	);
};