import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo';
import './style/todoApp.css';
import axios from 'axios';

class AppTodo extends Component {
	state = {
		todos: [],
	};

	deleteTodo = (id) => {
		if (!window.confirm('Are you sure you wish to delete this item?')) {
			return;
		}
		axios
			.delete('http://localhost:5000/todos/' + id)
			.then((res) => console.log(res.data))
			.catch((err) => {
				console.log('Error: ' + err);
				return;
			});

		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	//todo: connect toggle complete field to DB
	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((rep) => {
				if (rep.id === id) {
					rep.completed = !rep.completed;
				}
				return rep;
			}),
		});
	};

	componentDidMount = () => {
		this.loadTodos();
	};

	addTodo = (content) => {
		const newTodo = {
			username: 'Akios',
			completed: false,
			content,
		};
		axios
			.post('http://localhost:5000/todos/add', newTodo)
			.then((res) => {
				this.loadTodos();
			})
			.catch((err) => console.log('Error: ', err));
	};

	loadTodos = () => {
		axios
			.get('http://localhost:5000/todos/')
			.then((res) => {
				if (res.data.length > 0) {
					let todoArr = res.data.map((obj) => {
						return {
							id: obj._id,
							content: obj.content,
						};
					});
					console.log(todoArr);
					this.setState({ todos: [...todoArr] });
				}
				this.scrollList.scrollTop = this.scrollList.scrollHeight;
			})
			.catch((err) => {
				console.log('Error: ', err);
			});
	};

	render() {
		return (
			<div
				ref={(element) => {
					this.scrollList = element;
				}}
				className='todoFlex appTodo'>
				<Todos
					delTodo={this.deleteTodo}
					toggleComplete={this.toggleComplete}
					todos={this.state.todos}
				/>
				<AddTodo addTodo={this.addTodo} />
				{this.state.todos.length === 0 ? (
					<div id='emptyHeader'>
						<h2>ADD A TODO TASK</h2>
					</div>
				) : (
					<></>
				)}
			</div>
		);
	}
}
export default AppTodo;
