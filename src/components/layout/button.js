import React from 'react';
import button from './button.png';
import PropTypes from 'prop-types';

const Button = (props) => {
	const size = props.size;

	const setSize = () => {
		if (size === undefined || size === 'small') return '100px';
		if (size === 'medium') return '200px';
		if (size === 'big') return '300px';
	};
	const setFontSize = () => {
		if (size === undefined || size === 'small') return '.5em';
		if (size === 'medium') return '.9em';
		if (size === 'big') return '1.2em';
	};

	const container_style = {
		position: 'relative',
		width: setSize(),
		fontSize: setFontSize(),
		margin: '5px auto',
		textAlign: 'center',
	};
	const imgStyle = {
		filter: `opacity(0.5) drop-shadow(0 0 0 ${props.bgColor || 'blue'})`,
	};
	const buttonHeading = {
		color: 'black',
		position: 'absolute',
		top: '40%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	};

	return (
		<div style={container_style}>
			<a href='#'>
				<img
					style={imgStyle}
					className='buttonImage'
					src={button}
					alt='buttonimage'
				/>
				<h1 style={buttonHeading}>{props.children}</h1>
			</a>
		</div>
	);
};

Button.propTypes = {
	bgColor: PropTypes.string,
	size: PropTypes.string,
	children: PropTypes.element,
};

export default Button;
