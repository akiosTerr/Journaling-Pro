import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditTextArea from './editTextArea';

class ReportItem extends Component {
	state = {
		content: '',
		showEditForm: false,
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	toggleEdit = () => {
		this.setState({ showEditForm: !this.state.showEditForm });
	};

	render() {
		const { id, content, date } = this.props.report;

		return (
			<div className='reportItem'>
				<div className='navRepItem'>
					<button title={'lock report'} className='btn'>
						<img
							className='imgicon filter1'
							src='password.png'
							alt='lock'></img>
					</button>
					<h3>{date}</h3>
					<div className='btn-gp'>
						<button
							title={'edit report'}
							onClick={this.toggleEdit}
							className='btn'>
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

				{this.state.showEditForm ? (
					<EditTextArea
						toggleEdit={this.toggleEdit}
						upd={(content) => {
							this.props.editRep({
								id,
								content,
							});
							this.toggleEdit();
						}}>
						{content}
					</EditTextArea>
				) : (
					<p>{content}</p>
				)}
			</div>
		);
	}
}

ReportItem.prototypes = {
	report: PropTypes.object.isRequired,
};

export default ReportItem;
