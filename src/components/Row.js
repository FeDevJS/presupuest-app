import React, { useContext } from 'react';
import { RowsContext } from './contexts/FieldProvider';
import "./styles/row.css";

export const Row = ({ rowClassName }) => {
	const { handleActive } = useContext(RowsContext);
	return (
		<div className={`rows ${rowClassName}-rows`} onDoubleClick={handleActive}></div>
	);
};