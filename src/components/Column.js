import React from 'react';
import { Row } from './Row';
import "./styles/columns.css";

export const Column = ({ colClass, colTitle }) => {
	return (
		<article className={`columns ${colClass}`}>
			<h2 className='cols-titles'>{colTitle}</h2>
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
			<Row rowClassName={colTitle} />
		</article>
	);
};