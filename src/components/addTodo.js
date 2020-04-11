import React, { Component } from 'react';

export default class AddTodo extends Component {
	state = {
		title: '',
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
		this.todoInput.value = '';
	};

	render() {
		return (
			<form
				onSubmit={this.onSubmit}
				className='addForm'
				style={{ display: 'flex' }}>
				<input
					type='text'
					name='title'
					maxLength='32'
					ref={(todoInput) => {
						this.todoInput = todoInput;
					}}
					placeholder='add Todo...'
					style={{ flex: '9', padding: '5px' }}
					onChange={this.onChange}
				/>
				<input
					type='submit'
					value='Submit'
					className='btnAdd'
					style={{ flex: '2' }}
				/>
			</form>
		);
	}
}
