import { useState, useEffect, useRef } from 'react';

export const useField = () => {
	const [active, setActive] = useState(false);
	const [budgetValue, setBugetValue] = useState(localStorage.getItem("currentBudget") || null);
	const [articleValue, setArticleValue] = useState(null);
	const [quantityValue, setQuantityValue] = useState(null);
	const [buyPriceValue, setBuyPriceValue] = useState(null);
	const [sellPriceValue, setSellPriceValue] = useState(null);
	const [field, setField] = useState({});
	const articlesRows = useRef(null);
	const quantityRows = useRef(null);
	const buyPriceRows = useRef(null);
	const sellPriceRows = useRef(null);
	const profitsRows = useRef(null);
	const rowTarget = useRef(null);
	const refField = useRef(undefined);
	const fieldButtonsContainer = useRef(null);
	let actualTarget = useRef(null);
	let actualIndex = useRef(null);
	let actualQuantity = useRef(null);
	let actualBuyPriceValue = useRef(null);
	let actualSellPriceValue = useRef(null);
	let actualProfit = useRef(null);

	useEffect(() => {
		articlesRows.current = Array.from(document.querySelectorAll(".Articles-rows"));
		quantityRows.current = Array.from(document.querySelectorAll(".Quantity-rows"));
		buyPriceRows.current = Array.from(document.querySelectorAll(".Buy-price-rows"));
		sellPriceRows.current = Array.from(document.querySelectorAll(".Sell-price-rows"));
		profitsRows.current = Array.from(document.querySelectorAll(".Profits-rows"));
		articlesRows.current.forEach((item, index) => {return item.textContent = localStorage.getItem(`article${index}`);});
		quantityRows.current.forEach((item, index) => {return item.textContent = localStorage.getItem(`quantity${index}`);});
		buyPriceRows.current.forEach((item, index) => {
			if(localStorage.getItem(`buy-price${index}`)) return item.textContent = "$" + localStorage.getItem(`buy-price${index}`);
		});
		sellPriceRows.current.forEach((item, index) => {
			if(localStorage.getItem(`sell-price${index}`)) return item.textContent = "$" + localStorage.getItem(`sell-price${index}`);
		});
		profitsRows.current.forEach((item, index) => {
			if(localStorage.getItem(`quantity${index}`) && localStorage.getItem(`buy-price${index}`) && localStorage.getItem(`sell-price${index}`)) {
				console.log(localStorage.getItem(`profit${index}`));
				item.textContent = "$" + localStorage.getItem(`profit${index}`);
			};
		});
	}, []);

	useEffect(() => {
		if(active) {
			refField.current = document.querySelector(".input-field");
			fieldButtonsContainer.current = document.querySelector(".field-buttons-container");
			if(refField.current.name === "articles-field" || refField.current.name === "quantity-field" || refField.current.name === "buy-price-field" || refField.current.name === "sell-price-field") {
				fieldButtonsContainer.current.classList.replace("field-container__buttons__container", "field-container--buttons-container-rows")
			};
			return refField?.current?.focus();
		} else if(!active) return refField.current = undefined;
	}, [active, refField]);

	useEffect(() => {
		if(articleValue !== null && rowTarget.current !== null) {
			actualTarget.current = articlesRows.current.filter(row => row === rowTarget.current);
			actualIndex.current = articlesRows.current.indexOf(rowTarget.current);
			actualTarget.current[0].textContent = articleValue;
			localStorage.setItem(`article${actualIndex.current}`, articleValue);
			return setArticleValue(null);
		} else if(quantityValue !== null && rowTarget !== null) {
			actualTarget.current = quantityRows.current.filter(row => row === rowTarget.current);
			actualIndex.current = quantityRows.current.indexOf(rowTarget.current);
			localStorage.setItem(`quantity${actualIndex.current}`, quantityValue);
			actualTarget.current[0].textContent = quantityValue;
			return setQuantityValue(null);
		} else if(buyPriceValue !== null && rowTarget !== null) {
			actualTarget.current = buyPriceRows.current.filter(row => row === rowTarget.current);
			actualIndex.current = buyPriceRows.current.indexOf(rowTarget.current);
			actualTarget.current[0].textContent = "$" + buyPriceValue;
			localStorage.setItem(`buy-price${actualIndex.current}`, buyPriceValue);
			return setBuyPriceValue(null);
		} else if(sellPriceValue !== null && rowTarget !== null) {
			actualTarget.current = sellPriceRows.current.filter(row => row === rowTarget.current);
			actualIndex.current = sellPriceRows.current.indexOf(rowTarget.current);
			actualTarget.current[0].textContent = "$" + sellPriceValue;
			localStorage.setItem(`sell-price${actualIndex.current}`, sellPriceValue);
			return setSellPriceValue(null);
		};
		profitsRows.current.forEach((item, index) => {
			if(localStorage.getItem(`buy-price${index}`) && localStorage.getItem(`sell-price${index}`) && localStorage.getItem(`quantity${index}`)) {
				console.log("profit 1º if")
				actualQuantity.current = +localStorage.getItem(`quantity${index}`);
				actualBuyPriceValue.current = +localStorage.getItem(`buy-price${index}`);
				actualSellPriceValue.current = +localStorage.getItem(`sell-price${index}`);
				actualProfit.current = actualSellPriceValue.current - actualBuyPriceValue.current;
				actualProfit.current = actualProfit.current * actualQuantity.current;
				localStorage.setItem(`profit${actualIndex.current}`, actualProfit.current);
				item.textContent = "$" + actualProfit.current;
			};
		});
	}, [articleValue, quantityValue, buyPriceValue, sellPriceValue]);

	useEffect(() => {
		if(budgetValue === null) return localStorage.removeItem("currentBudget")
		else if(budgetValue !== null) {
			return localStorage.setItem("currentBudget", budgetValue);
		};
	}, [budgetValue]);

	const handleActive = (e) => {
		if(e.target.matches(".Profits-rows")) return;
		setActive(true);
		if(e.target.matches(".set--btn") || e.target.matches(".btn-text")) {
			return setField({
				type: "number",
				name: "budget-field",
				className: "input-field",
				placeholder: "Set budget..."
			});
		} else if(e.target.matches(".Articles-rows")) {
			rowTarget.current = e.target;
			return setField({
				type: "text",
				name: "articles-field",
				className: "input-field",
				placeholder: "Set article..."
			});
		} else if(e.target.matches(".Quantity-rows")) {
			rowTarget.current = e.target;
			return setField({
				type: "number",
				name: "quantity-field",
				className: "input-field",
				placeholder: "Set quantity..."
			});
		} else if(e.target.matches(".Buy-price-rows")) {
			rowTarget.current = e.target;
			return setField({
				type: "number",
				name: "buy-price-field",
				className: "input-field",
				placeholder: "Set buy price..."
			});
		} else if(e.target.matches(".Sell-price-rows")) {
			rowTarget.current = e.target;
			return setField({
				type: "number",
				name: "sell-price-field",
				className: "input-field",
				placeholder: "Set sell price..."
			});
		};
	};

	const handleField = (e) => {
		e.preventDefault();
		if(e.target.matches(".send--btn") && field?.name === "budget-field") {setBugetValue(refField.current.value)}
		else if(e.target.matches(".send--btn") && field?.name === "articles-field") {setArticleValue(refField.current.value)}
		else if(e.target.matches(".send--btn") && field?.name === "quantity-field") {setQuantityValue(refField.current.value)}
		else if(e.target.matches(".send--btn") && field?.name === "buy-price-field") {setBuyPriceValue(refField.current.value)}
		else if(e.target.matches(".send--btn") && field?.name === "sell-price-field") {setSellPriceValue(refField.current.value)}
		setField(null);
		return setActive(false);
	};

	const handleDeleteField = (e) => {
		if(active) {
			e.preventDefault();
			rowTarget.current.textContent = null;
			if(rowTarget.current.classList.contains("Articles-rows")) {
				articlesRows.current.forEach(() => {
					actualIndex.current = articlesRows.current.indexOf(rowTarget.current);
					localStorage.removeItem(`article${actualIndex.current}`);
				});
			} else if(rowTarget.current.classList.contains("Quantity-rows")) {
				quantityRows.current.forEach(() => {
					actualIndex.current = quantityRows.current.indexOf(rowTarget.current);
					localStorage.removeItem(`quantity${actualIndex.current}`);
				});
			} else if(rowTarget.current.classList.contains("Buy-price-rows")) {
				buyPriceRows.current.forEach(() => {
					actualIndex.current = buyPriceRows.current.indexOf(rowTarget.current);
					localStorage.removeItem(`buy-price${actualIndex.current}`);
				});
			} else if(rowTarget.current.classList.contains("Sell-price-rows")) {
				sellPriceRows.current.forEach(() => {
					actualIndex.current = sellPriceRows.current.indexOf(rowTarget.current);
					localStorage.removeItem(`sell-price${actualIndex.current}`);
				});
			};
			for(let i = 0; i < profitsRows.current.length; i++) {
				if(!localStorage.getItem(`buy-price${i}`) && localStorage.getItem(`sell-price${i}`) && localStorage.getItem(`quantity${i}`)) {
					localStorage.removeItem(`profit${i}`);
					profitsRows.current[i].textContent = null;
				} else if(localStorage.getItem(`buy-price${i}`) && !localStorage.getItem(`sell-price${i}`) && localStorage.getItem(`quantity${i}`)) {
					localStorage.removeItem(`profit${i}`);
					profitsRows.current[i].textContent = null;
				} else if(localStorage.getItem(`buy-price${i}`) && localStorage.getItem(`sell-price${i}`) && !localStorage.getItem(`quantity${i}`)) {
					localStorage.removeItem(`profit${i}`);
					profitsRows.current[i].textContent = null;
				};
			};
			return setActive(false);
		} else if(!active) return setBugetValue(null);
	};

	return {
		handleActive,
		handleField,
		handleDeleteField,
		active,
		budgetValue,
		field,
	};
};