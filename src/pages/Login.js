import React, { useState, useRef } from 'react';
import '../components/style/authForm.css';
import axios from 'axios';

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
			.post('http://localhost:4000/login/', usercred)
			.then((res) => console.log(res.headers))
			.catch((err) => {
				throw err;
			});
	};

	return (
		<div className={'block'}>
			<h1 style={{ marginBottom: '20px' }}>Login</h1>
			<form className='loginform' onSubmit={submit}>
				<div className='fieldBlock'>
					<label className='mylabel' htmlFor='username'>
						username
					</label>
					<input
						ref={usrInput}
						onChange={onChange}
						className='item'
						name='username'
						type='text'
						placeholder=' username'></input>
				</div>
				<div className='fieldBlock'>
					<label className='mylabel' htmlFor='password'>
						password
					</label>
					<input
						ref={usrPass}
						onChange={onChange}
						className='item'
						name='password'
						type='text'
						placeholder=' password'></input>
				</div>
				<input className='subbtn' type='submit' value='Login'></input>
			</form>
		</div>
	);
};

export default Login;
