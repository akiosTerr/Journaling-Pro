import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};
	render() {
		const { content, id } = this.props.todo;
		return (
			<div className='todoItem'>
				<input
					className='cbox'
					type='checkbox'
					onChange={this.props.toggleComplete.bind(this, id)}></input>
				<p style={this.getStyle()}>{content}</p>
				<button
					onClick={this.props.delRep.bind(this, id)}
					className='btnDelete'>
					X
				</button>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
