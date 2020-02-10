import React, { Component } from 'react';

export default class AddReport extends Component {
	state = {
		content: ''
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = e => {
		e.preventDefault();
		this.props.addReport(this.state.content);
		this.setState({ content: '' });
		document.getElementById('report-text').value = '';
	};
	render() {
		return (
			<form onSubmit={this.onSubmit} className='form-style'>
				<p id='date-p'>07/08/1997 13:49</p>
				<textarea
					onChange={this.onChange}
					name='content'
					placeholder='add day report...'
					id='report-text'
				/>
				<input id='subbtn' type='submit' value='Submit'></input>
			</form>
		);
	}
}
