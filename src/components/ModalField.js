import React, { useContext } from 'react';
import { FieldContext } from './FieldProvider';
import { InputContainer } from './InputContainer';

export const ModalField = () => {
	const { active } = useContext(FieldContext);
	return (
		<>
			{active && <InputContainer />}
		</>
	);
};