import React, { createContext } from 'react';
import { useBudgetField } from '../custom-hooks/useBudgetField';
import { useRowField } from '../custom-hooks/useRowField';
export const FieldContext = createContext(null);
export const RowsContext = createContext(null);
export const inputContext = createContext(null);
export const FieldProvider = ({ children }) => {
	const data = useBudgetField();
	return(
		<>
			<FieldContext.Provider value={data}>
				{children}
			</FieldContext.Provider>
		</>
	);
};
export const RowsProvider = ({ children }) => {
	const data = useRowField();
		return(
			<>
				<RowsContext.Provider value={data}>
					{children}
				</RowsContext.Provider>
			</>
		);
}; 