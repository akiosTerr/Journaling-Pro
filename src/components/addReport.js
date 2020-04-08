import React, { Component } from 'react';

export default class AddReport extends Component {
	state = {
		content: '',
	};

	switchEmptyNotifier = (v) => {
		this.emptyNotifier.style.display = v;
	};

	onChange = (e) => {
		this.switchEmptyNotifier('none');
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.content === '') {
			this.switchEmptyNotifier('block');
			return false;
		}
		this.switchEmptyNotifier('none');

		this.props.addReport(this.state.content);

		this.setState({ content: '' });
		this.textAreaElement.value = '';
	};
	render() {
		return (
			<form onSubmit={this.onSubmit} className='form-style grid-item'>
				<p id='date-p'>{this.props.date}</p>
				<p
					id='emptNotifier'
					ref={(emptNotifier) => {
						this.emptyNotifier = emptNotifier;
					}}>
					cannot be empty
				</p>
				<textarea
					onChange={this.onChange}
					name='content'
					placeholder='add day report...'
					id='report-text'
					ref={(textarea) => {
						this.textAreaElement = textarea;
					}}
				/>

				<input id='subbtn' type='submit' value='Submit'></input>
			</form>
		);
	}
}
