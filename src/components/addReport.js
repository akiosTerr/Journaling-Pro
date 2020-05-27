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
			<form onSubmit={this.onSubmit} className='addReportForm grid-item'>
				<p id='date-p'>{this.props.date}</p>
				<div className='emptNotifier'>
					<p
						ref={(emptNotifier) => {
							this.emptyNotifier = emptNotifier;
						}}>
						please fill the form
					</p>
				</div>
				<textarea
					onChange={this.onChange}
					name='content'
					placeholder='add day report...'
					id='report-text'
					className='bigTextArea'
					ref={(textarea) => {
						this.textAreaElement = textarea;
					}}
				/>
				<input id='subbtn' type='submit' value='Submit'></input>
			</form>
		);
	}
}
