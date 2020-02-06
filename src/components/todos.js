import React, { Component } from 'react';
import TodoItem from './todo-item';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		return this.props.todos.map(item => (
			<TodoItem
				key={item.id}
				delRep={this.props.delRep}
				toggleComplete={this.props.toggleComplete}
				todo={item}
			/>
		));
	}
}

Todos.propTypes = {
	reports: PropTypes.array.isRequired
};

export default Todos;
