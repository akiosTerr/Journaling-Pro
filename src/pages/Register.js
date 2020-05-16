import React, { useState, useRef } from 'react';
import '../components/style/authForm.css';
import axios from 'axios';

const Login = () => {
	const template = {
		username: '',
		email: '',
		password: '',
		passwordconf: '',
	};
	const [usercred, setusercred] = useState(template);
	const usrInput = useRef(null);
	const usrPass = useRef(null);
	const usrPass2 = useRef(null);
	const usrEmail = useRef(null);

	const refArray = [usrInput, usrPass, usrPass2, usrEmail];

	const onChange = (e) => {
		setusercred(() => {
			return {
				username: usrInput.current.value,
				password: usrPass.current.value,
				passwordconf: usrPass2.current.value,
				email: usrEmail.current.value,
			};
		});
	};

	// const checkInput = () => {
	// 	for(const ref of refArray) {
	// 		if(ref.value == null){
	// 		}
	// 	}
	// };

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
			<h1 style={{ marginBottom: '20px' }}>Register</h1>
			<form className='loginform' onSubmit={submit}>
				<div className='fieldBlock'>
					<label className='label' htmlFor='username'>
						username
					</label>
					<input
						ref={usrInput}
						onChange={onChange}
						className='item empty'
						name='username'
						type='text'
						placeholder=' john doe'></input>
					<p style={{ color: 'red' }}>error: field empty</p>
				</div>
				<div className='fieldBlock'>
					<label className='label' htmlFor='email'>
						email
					</label>
					<input
						ref={usrEmail}
						onChange={onChange}
						className='item'
						name='email'
						type='text'
						placeholder=' johndoe@evilcorp.com'></input>
				</div>
				<div className='fieldBlock'>
					<label className='label' htmlFor='password'>
						password
					</label>
					<input
						ref={usrPass}
						onChange={onChange}
						className='item'
						name='password'
						type='password'
						placeholder=' password'></input>
				</div>
				<div className='fieldBlock'>
					<label className='label' htmlFor='passwordconf'>
						repeat password
					</label>
					<input
						ref={usrPass2}
						onChange={onChange}
						className='item'
						name='passwordconf'
						type='password'
						placeholder=' password confirmation'></input>
				</div>
				<input className='subbtn' type='submit' value='Register'></input>
			</form>
		</div>
	);
};

export default Login;
