import React, { Component } from 'react';
import Todos from './todos';
import Header from './layout/HeaderTodo';
import './style/todoApp.css';

class App extends Component {
	state = {
		todos: [
			{ id: 0, content: 'UI/UX design', completed: false },
			{ id: 1, content: 'React Dev', completed: false },
			{ id: 2, content: 'MongoDB', completed: false },
			{ id: 3, content: 'Express', completed: false },
			{ id: 4, content: 'MERN stack', completed: false },
			{ id: 5, content: 'React Native', completed: false }
		]
	};

	deleteReport = id => {
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

	render() {
		return (
			<div className='Container'>
				<Header></Header>
				<div className='todoFlex'>
					<Todos
						delRep={this.deleteReport}
						toggleComplete={this.toggleComplete}
						todos={this.state.todos}
					/>
				</div>
			</div>
		);
	}
}
export default App;
