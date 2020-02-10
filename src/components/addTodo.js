import React, { Component } from 'react';

export default class AddTodo extends Component {
	state = {
		title: ''
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
		document.getElementById('input-id').value = '';
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
				<input
					type='text'
					name='title'
					id='input-id'
					placeholder='add Todo...'
					style={{ flex: '10', padding: '5px' }}
					onChange={this.onChange}
				/>
				<input
					type='submit'
					value='Submit'
					className='btnAdd'
					style={{ flex: '1' }}
				/>
			</form>
		);
	}
}
