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
				<img className='logo' src='JournalingProLOGO.png' alt='lambda' />
				<h1 className='title'> Journaling Pro</h1>
			</Link>
			<Link className='navItem' to='/login'>
				Login
			</Link>
			<Link className='navItem' to='/register'>
				Register
			</Link>
			<button className='navItem icon' onClick={checkui}>
				<i className='fa fa-bars'></i>
			</button>
		</div>
	);
}

export default Header;
