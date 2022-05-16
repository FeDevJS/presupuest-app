import React, { useEffect, useRef } from 'react';
import './styles/input-container.css';
export const InputContainer = (props) => {
	const selfContainer = useRef(null);
	useEffect(() => {
		const self = selfContainer.current;
		return() => {
			self.remove();
		};
	}, []);
	return(
		<>
			{props.active && 
			<form ref={selfContainer} className='field__container' autoComplete='off'>
				<input 
				ref={props.fieldReference}
				type={props.fieldType}
				className={props.fieldClass} 
				name={props.fieldName}
				placeholder={props.placeHolder} 
				/>
				<div className='field-container__buttons__container'>
					<input 
					className="field--buttons send--btn" 
					type="submit" 
					name="send-btn"
					onClick={props.handleField}
					value="Apply" 
					/>
					<input 
					className="field--buttons cancel--btn" 
					type="submit" 
					name="cancel-btn"
					onClick={props.handleField}
					value="Cancel" 
					/>
				</div>
			</form>}
		</>
	);
};