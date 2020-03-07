import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo';
import './style/todoApp.css';
import uuid from 'uuid';

class AppTodo extends Component {
	state = {
		todos: [
			{ id: uuid.v4(), content: 'UI/UX design', completed: false },
			{ id: uuid.v4(), content: 'React Dev', completed: false },
			{ id: uuid.v4(), content: 'MongoDB', completed: false },
			{ id: uuid.v4(), content: 'Express', completed: false },
			{ id: uuid.v4(), content: 'MERN stack', completed: false },
			{ id: uuid.v4(), content: 'React Native', completed: false }
		]
	};

	deleteTodo = id => {
		this.setState({
			todos: [...this.state.todos.filter(rep => rep.id !== id)]
		});
	};

	toggleComplete = id => {
		this.setState({
			todos: this.state.todos.map(rep => {
				if (rep.id === id) {
					rep.completed = !rep.completed;
				}
				return rep;
			})
		});
	};

	addTodo = content => {
		const newTodo = {
			id: uuid.v4(),
			content,
			completed: false
		};
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	};

	render() {
		return (
			<div className='todoFlex'>
				<AddTodo addTodo={this.addTodo} />
				<Todos
					delTodo={this.deleteTodo}
					toggleComplete={this.toggleComplete}
					todos={this.state.todos}
				/>
			</div>
		);
	}
}
export default AppTodo;
