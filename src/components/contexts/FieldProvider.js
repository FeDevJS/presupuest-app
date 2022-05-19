import React, { createContext } from 'react';
import { useField } from '../custom-hooks/useField';
export const FieldContext = createContext(null);
export const RowsContext = createContext(null);
export const inputContext = createContext(null);
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
export const RowsProvider = ({ children }) => {
	const data = useField();
		return(
			<>
				<RowsContext.Provider value={data}>
					{children}
				</RowsContext.Provider>
			</>
		);
}; 