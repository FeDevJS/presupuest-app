import React from 'react';
import './styles/button.css';
export const Button = (props) => {
	return <button className={`button ${props.class}`} type="button" onClick={props.fOnClick}>{props.innerText}</button>
};