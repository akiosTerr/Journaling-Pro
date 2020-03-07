import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReportItem extends Component {
	render() {
		const { id, content, date } = this.props.report;
		return (
			<div className='reportItem'>
				<div className='navRepItem'>
					<p></p>
					<h3>{date}</h3>
					<button onClick={this.props.delRep.bind(this, id)} id='deletebtn'>
						X
					</button>
				</div>
				<p>{content}</p>
			</div>
		);
	}
}

ReportItem.prototypes = {
	report: PropTypes.object.isRequired
};

export default ReportItem;
