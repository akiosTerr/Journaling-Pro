import React, { Component } from 'react';
import './style/journalApp.css';
import Header from './layout/HeaderJournal';
import AddReport from './addReport';
import AppTodo from './todoApp';
import DayReports from './dayReports';
import uuid from 'uuid';

class App extends Component {
	state = {
		journalReports: [
			{ id: uuid.v4(), content: 'demo day report', date: '12/2/1845' }
		]
	};

	getDate = () => {
		let d = new Date();
		let datef = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
		return datef;
	};

	addReport = content => {
		this.getDate();
		const newReport = {
			id: uuid.v4(),
			date: this.getDate(),
			content
		};
		this.setState({
			journalReports: [...this.state.journalReports, newReport]
		});
	};
	render() {
		return (
			<div className='wrapper'>
				<Header className='header' />
				<div className='mainreport'>
					<AddReport addReport={this.addReport} />
					<DayReports reports={this.state.journalReports} />
					<AppTodo />
				</div>
			</div>
		);
	}
}

export default App;
