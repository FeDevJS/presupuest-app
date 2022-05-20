import { useState, useEffect, useRef } from 'react';

export const useBudgetField = () => {
	const [active, setActive] = useState(false);
	const [budgetValue, setBugetValue] = useState(localStorage.getItem("currentBudget") || null);
	const [field, setField] = useState({});
	const refField = useRef(undefined);

	useEffect(() => {
		active ? refField.current.focus() : refField.current = undefined
	}, [active, refField]);

	useEffect(() => {
		budgetValue === null ? localStorage.removeItem("currentBudget") : localStorage.setItem("currentBudget", budgetValue);
	}, [budgetValue]);

	const handleActive = () => {
		setActive(true);
		return setField({
			type: "number",
			name: "budget-field",
			className: "input-field",
			placeholder: "Set budget..."
		});
	};

	const handleField = (e) => {
		e.preventDefault();
		setBugetValue(refField.current.value)
		setField(null);
		return setActive(false);
	};

	const handleDeleteField = (e) => setBugetValue(null);

	return {
		handleActive,
		handleField,
		handleDeleteField,
		active,
		budgetValue,
		refField,
		field,
	};
};