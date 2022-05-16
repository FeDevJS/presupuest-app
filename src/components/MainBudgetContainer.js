import React from 'react';
import { Bottom } from './Bottom';
import { Top } from './Top';
import { useField } from './custom-hooks/useField.js';
import { InputContainer } from './InputContainer';
export const MainBudgetContainer = () => {
	const budgetField = useField({
		type: "number",
		initialState: localStorage.getItem("currentBudget"),
		name: "budget-field",
		class: "input-field",
		placeHolder: "Set budget..."
	});
	return(
		<>
			<div className='main__budget__container'>
				<Top 
				setActive={budgetField.handleActive} 
				deleteField={budgetField.handleDeleteField} 
				budget={budgetField.elRef} 
				fieldValue={budgetField.fieldValue} />
				<Bottom>
					<>
						{budgetField.active && <InputContainer 
							active={budgetField.active || null} 
							fieldType={budgetField.type || null}
							fieldClass={budgetField.className || null}
							fieldName={budgetField.name || null}
							placeHolder={budgetField.placeHolder || null}
							fieldReference={budgetField.refField || null}
							handleField={budgetField.handleField || null} 
						/>}
					</>
				</Bottom>
			</div>
		</>
	);
};