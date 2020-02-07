import React, { Component } from 'react';

export default class AddReport extends Component {
	render() {
		return (
			<form className='form-style'>
				<p id='date-p'>07/08/1997 13:49</p>
				<textarea id='report' />

				<input id='subbtn' type='submit' value='Submit'></input>
			</form>
		);
	}
}
