import React, { useState } from 'react';

export default function register() {
	return (
		<>
			<form>
				<input type='text' name='name'></input>
				<input type='text' name='email'></input>
				<input type='submit' value='Submit'></input>
			</form>
		</>
	);
}
