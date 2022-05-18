import React, { createContext } from 'react';
import { useField } from './custom-hooks/useField';
export const FieldContext = createContext();
export const FieldProvider = ({ children }) => {
	const data = useField();
	return(
		<>
			<FieldContext.Provider value={data}>
				{children}
			</FieldContext.Provider>
		</>
	);
};