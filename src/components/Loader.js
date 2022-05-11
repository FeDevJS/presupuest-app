import React, { useEffect, useRef } from 'react';
import './styles/loader.css';
export const Loader = (props) => {
	const selfEl = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		return() => self.remove();
	}, []);
	return <span ref={selfEl} className={`${props.class}`}>{props.innerText}</span>;
};