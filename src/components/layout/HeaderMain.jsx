import React, { useRef } from 'react';
import './css/headerStyle.css';

function Header() {
	const nav = useRef(null);

	const checkui = () => {
		console.log(nav.className);
	};

	return (
		<div className='nav' ref={nav}>
			<img src='Orange_lambda.png' alt='lambda' />
			<h1> Journaling Pro</h1>
			<a href='#'>Login</a>
			<a href='#'>Register</a>
			<a href='javascript:void(0);' onClick={checkui} className='icon'>
				<i className='fa fa-bars'></i>
			</a>
		</div>
	);
}

export default Header;
