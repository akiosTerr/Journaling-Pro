import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo';
import './style/todoApp.css';
import axios from 'axios';

class AppTodo extends Component {
	state = {
		todos: []
	};

	deleteTodo = id => {
		if (!window.confirm('Are you sure you wish to delete this item?')) {
			return;
		}
		axios
			.delete('http://localhost:5000/todos/' + id)
			.then(res => console.log(res.data))
			.catch(err => {
				console.log('Error: ' + err);
				return;
			});

		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		});
	};

	//todo: connect toggle complete field to DB
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

	componentDidMount = () => {
		this.loadTodos();
	};

	loadTodos = () => {
		axios.get('http://localhost:5000/todos/').then(res => {
			if (res.data.length > 0) {
				let todoArr = res.data.map(obj => {
					return {
						id: obj._id,
						content: obj.content
					};
				});
				console.log(todoArr);
				this.setState({ todos: [...todoArr] });
			}
		});
	};

	addTodo = content => {
		const newTodo = {
			username: 'Akios',
			content,
			completed: false
		};
		axios
			.post('http://localhost:5000/todos/add', newTodo)
			.then(res => {
				console.log(res.data);
				this.loadTodos();
			})
			.catch(err => console.log('Error: ', err));
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
