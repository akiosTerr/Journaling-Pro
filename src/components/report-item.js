import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReportItem extends Component {
	render() {
		const { id, content, date } = this.props.report;
		return (
			<div className='reportItem'>
				<div className='navRepItem'>
					<span></span>
					<h3>{date}</h3>
					<div className='btn-gp'>
						<button
							title={'edit report'}
							onClick={this.props.editRep.bind(this, id)}
							id='editbtn'>
							<i className='fa fa-ellipsis-v'></i>
						</button>
						<button
							title={'delete report'}
							onClick={this.props.delRep.bind(this, id)}
							id='deletebtn'>
							X
						</button>
					</div>
				</div>
				<p>{content}</p>
			</div>
		);
	}
}

ReportItem.prototypes = {
	report: PropTypes.object.isRequired,
};

export default ReportItem;
