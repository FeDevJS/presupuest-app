import React, { useContext, useEffect, useRef } from 'react';
import { FieldContext } from './FieldProvider';
import './styles/input-container.css';
export const InputContainer = () => {
	const data = useContext(FieldContext);
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
				<input 
				type={data.type}
				className={"input-field"} 
				name={data.name}
				placeholder={data.placeHolder}
				/>
				<div className='field-container__buttons__container'>
					<input 
					className="field--buttons send--btn" 
					type="submit" 
					name="send-btn"
					onClick={data.handleField}
					value="Apply" 
					/>
					<input 
					className="field--buttons cancel--btn" 
					type="submit" 
					name="cancel-btn"
					onClick={data.handleField}
					value="Cancel" 
					/>
				</div>
			</form>
		</>
	);
};