import React, { Component } from 'react';

export default class AddTodo extends Component {
	state = {
		title: '',
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		if (e.key === 'Enter') {
			this.props.addTodo(this.state.title);
			this.setState({ title: '' });
			this.todoInput.value = '';
			e.preventDefault();
		}
	};

	render() {
		return (
			<form className='addTodoForm' onSubmit={this.onSubmit}>
				<input
					type='text'
					name='title'
					maxLength='85'
					className='addTodoTextInput'
					onKeyDown={this.onSubmit}
					ref={(todoInput) => {
						this.todoInput = todoInput;
					}}
					placeholder='add Todo...'
					onChange={this.onChange}
				/>
			</form>
		);
	}
}
