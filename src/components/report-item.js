import React, { Component } from 'react';

class ReportItem extends Component {
	render() {
		const { id, content, date } = this.props.report;
		return (
			<div className='reportItem'>
				<h3>{date}</h3>
				<p>{content}</p>
			</div>
		);
	}
}

export default ReportItem;
