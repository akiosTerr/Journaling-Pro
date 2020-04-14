import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/headerStyle.css';

function Header() {
	const nav = useRef(null);

	const checkui = () => {
		console.log(nav.className);
	};

	return (
		<div className='nav' ref={nav}>
			<Link to='/'>
				<img className='logo' src='Orange_lambda.png' alt='lambda' />
				<h1 className='title'> Journaling Pro</h1>
			</Link>
			<Link className='navItem' to='/login'>
				Login
			</Link>
			<Link className='navItem' to='/register'>
				Register
			</Link>
			<a className='navItem icon' href='javascript:void(0);' onClick={checkui}>
				<i className='fa fa-bars'></i>
			</a>
		</div>
	);
}

export default Header;
