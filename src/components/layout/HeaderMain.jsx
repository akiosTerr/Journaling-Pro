import React, { useRef } from 'react';
import './css/headerStyle.css';

function Header() {
	const nav = useRef(null);

	const checkui = () => {
		console.log(nav.className);
	};

	return (
		<div className='nav' ref={nav}>
			<img className='logo' src='Orange_lambda.png' alt='lambda' />
			<h1 className='title'> Journaling Pro</h1>
			<a className='navItem' href='#'>Login</a>
			<a className='navItem' href='#'>Register</a>
			<a className='navItem icon' href='javascript:void(0);' onClick={checkui}>
				<i className='fa fa-bars'></i>
			</a>
		</div>
	);
}

export default Header;
