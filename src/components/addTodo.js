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
			<form className='addTodoForm' onSubmit={this.onSubmit}>
				<input
					type='text'
					name='title'
					maxLength='85'
					className='addTodoTextInput'
					ref={(todoInput) => {
						this.todoInput = todoInput;
					}}
					placeholder='add Todo...'
					onChange={this.onChange}
				/>
				<input type='submit' value='Submit' className='btnAdd' />
			</form>
		);
	}
}
