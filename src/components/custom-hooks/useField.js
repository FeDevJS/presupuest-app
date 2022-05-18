import { useState, useEffect, useRef } from 'react';

export const useField = () => {
	const [fieldValue, setFieldValue] = useState(localStorage.getItem("currentBudget") || null);
	const [active, setActive] = useState(false);
	const refField = useRef(undefined);
	const [field, setField] = useState(null);
	useEffect(() => {
		if(active) {
			refField.current = document.querySelector(".input-field");
			return refField?.current?.focus();
		} else if(!active) return refField.current = undefined;
	}, [active, refField]);
	useEffect(() => {
		if(fieldValue === null) return localStorage.removeItem("currentBudget")
		else if(fieldValue !== null) {
			return localStorage.setItem("currentBudget", fieldValue);
		};
	}, [fieldValue]);
	const handleActive = (e) => {
		setActive(true);
		if(e.target.matches(".set--btn") || e.target.matches(".btn-text")) {
			return setField({
				type: "number",
				name: "budget-field",
				className: "input-field",
				placeHolder: "Set budget..."
			});
		} else if(e.target.matches(".articles--rows")) {
			return setField({
				type: "text",
				name: "articles-field",
				className: "input-field",
				placeHolder: "Set article..."
			});
		} else if(e.target.matches(".quantity--rows")) {
			return setField({
				type: "number",
				name: "quantity-field",
				className: "input-field",
				placeHolder: "Set quantity..."
			});
		};
	};
	const handleField = (e) => {
		e.preventDefault();
		if(e.target.matches(".send--btn")) setFieldValue(refField.current.value);
		setField(null);
		return setActive(false);
	};
	const handleDeleteField = () => {
		if(!active) return setFieldValue(null);
	};
	return {
		handleActive,
		handleField,
		handleDeleteField,
		active,
		fieldValue,
		...field,
	};
};