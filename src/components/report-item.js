import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ReportItem.prototypes = {
	report: PropTypes.object.isRequired
};

export default ReportItem;
