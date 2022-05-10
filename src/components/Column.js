import React from 'react';
import "./styles/column.css";

export const Column = (props) => {
	return (
		<article className={`column ${props.colClass}`}>{props.children}</article>
	);
};