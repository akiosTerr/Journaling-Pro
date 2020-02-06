import React, { Component } from 'react';

export default class AddReport extends Component {
	render() {
		return (
			<form className='form-style'>
				<input
					id='report'
					type='text'
					name='report'
					placeholder='write your day report ...'></input>
				<input id='subbtn' type='submit' value='Submit'></input>
			</form>
		);
	}
}
