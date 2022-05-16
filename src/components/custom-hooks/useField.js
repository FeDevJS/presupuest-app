import { useState, useEffect, useRef } from 'react';

export const useField = (props) => {
	const [fieldValue, setFieldValue] = useState(props.initialState || null);
	const [active, setActive] = useState(false);
	const refField = useRef(props.refField);
	const elRef = useRef(props.elRef);
	const type = props.type;
	const name = props.name;
	const className = props.class;
	const placeHolder = props.placeHolder;
	useEffect(() => {
		if(active) return refField.current.focus();
	}, [active]);
	useEffect(() => {
		if(fieldValue === null) return localStorage.removeItem("currentBudget")
		else if(fieldValue !== null && name === "budget-field") {
		return localStorage.setItem("currentBudget", fieldValue);
		};
	}, [fieldValue, name]);
	const handleActive = () => {
		setActive(true);
	};
	const handleField = (e) => {
		e.preventDefault();
		if(e.target.name === "send-btn") setFieldValue(refField.current.value);
		else if(e.target.name === "cancel--btn") setFieldValue(null);
		return setActive(false);
		};
	const handleDeleteField = () => {
		setFieldValue(null);
	};
	return {
		type,
		name,
		className,
		placeHolder,
		active,
		refField,
		elRef,
		fieldValue,
		handleActive,
		handleField,
		handleDeleteField
	};
};