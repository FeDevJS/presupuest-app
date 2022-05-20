import React, { useContext, useEffect, useRef } from 'react';
import { FieldContext, RowsContext } from './contexts/FieldProvider';
import './styles/input-container.css';
export const InputContainer = () => {
	const dataBudget = useContext(FieldContext);
	const rowData = useContext(RowsContext);
	const selfContainer = useRef(null);
	useEffect(() => {
		const self = selfContainer.current;
		return() => {
			self.remove();
		};
	}, []);
	return(
		<>
			<form ref={selfContainer} className='field__container' autoComplete='off'>
				{dataBudget.active ? <input ref={dataBudget.refField} {...dataBudget.field} /> : rowData.active ? <input ref={rowData.refField} {...rowData.field} /> : null}
				<div className='field-buttons-container field-container__buttons__container'>
					<input 
					className="field--buttons send--btn" 
					type="submit" 
					name="send-btn"
					onClick={dataBudget.active ? dataBudget.handleField : rowData.active ? rowData.handleField : null}
					value="Apply" 
					/>
					<input 
					className="field--buttons cancel--btn" 
					type="submit" 
					name="cancel-btn"
					onClick={dataBudget.active ? dataBudget.handleField : rowData.active ? rowData.handleField : null}
					value="Cancel" 
					/>
					{rowData.active && <input 
					className="field--buttons delete--btn" 
					type="submit" 
					name="delete-btn"
					onClick={rowData.handleDeleteField}
					value="C" 
					/>}
				</div>
			</form>
		</>
	);
};