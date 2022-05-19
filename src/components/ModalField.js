import React, { useContext } from 'react';
import { FieldContext, RowsContext } from './contexts/FieldProvider';
import { InputContainer } from './InputContainer';

export const ModalField = () => {
	const { active } = useContext(FieldContext);
	const rowsContext = useContext(RowsContext);
	return (
		<>
			{active ? <InputContainer /> : rowsContext.active ? <InputContainer /> : null}
		</>
	);
};