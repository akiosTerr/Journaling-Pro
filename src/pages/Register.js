import React, { useState } from 'react';

export default function Register() {
	return (
		<div>
			<form>
				<input type='text' name='name'></input>
				<input type='text' name='email'></input>
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
}
