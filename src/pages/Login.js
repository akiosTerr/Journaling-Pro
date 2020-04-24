import React, { useState, useRef } from 'react';
import axios from 'axios';

const marginstyle = {
	margin: 'auto 2em',
	color: 'white',
};

const formStyle = {
	display: 'flex',
	flexDirection: 'column',
};

const item = {
	width: '50%',
	marginBottom: '10px',
	padding: '5px 0px',
};

const subbtn = {
	width: '150px',
	padding: '5px 0px',
	cursor: 'pointer',
};

const Login = () => {
	const [usercred, setusercred] = useState({ username: '', password: '' });
	const usrInput = useRef(null);
	const usrPass = useRef(null);

	const onChange = () => {
		setusercred({
			username: usrInput.current.value,
			password: usrPass.current.value,
		});
	};

	const submit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/login/', usercred, {
				credentials: 'same-origin',
				mode: 'no-cors',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:3000/',
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				withCredentials: false,
				crossdomain: true,
			})
			.then((res) => console.log(res.config))
			.catch((err) => {
				throw err;
			});
	};

	return (
		<div style={marginstyle}>
			<h1 style={{ marginBottom: '20px' }}>Login</h1>
			<form style={formStyle} onSubmit={submit}>
				<input
					ref={usrInput}
					onChange={onChange}
					style={item}
					name='username'
					type='text'
					placeholder='username'></input>
				<input
					ref={usrPass}
					onChange={onChange}
					style={item}
					name='password'
					type='text'
					placeholder='password'></input>
				<input style={subbtn} type='submit' value='Login'></input>
			</form>
		</div>
	);
};

export default Login;
