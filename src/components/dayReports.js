import React, { Component } from 'react';
import ReportItem from './report-item';
import PropTypes from 'prop-types';

class DayReports extends Component {
	render() {
		return this.props.reports.map((itemRep) => (
			<ReportItem
				delRep={this.props.delRep}
				editRep={this.props.editRep}
				key={itemRep.id}
				report={itemRep}></ReportItem>
		));
	}
}

DayReports.propTypes = {
	reports: PropTypes.array.isRequired,
};

export default DayReports;
