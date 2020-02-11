import React, { Component } from 'react';
import './style/journalApp.css';
import Header from './layout/HeaderJournal';
import AddReport from './addReport';
import AppTodo from './todoApp';
import DayReports from './dayReports';
import uuid from 'uuid';

class App extends Component {
	state = {
		journalReports: [{ id: uuid.v4(), content: 'test', date: '12/2/1845' }]
	};

	getDate = () => {
		let d = new Date();
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
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
			<>
				<Header className='header' />
				<div className='wrapper'>
					<div className='head'>
						<AddReport date={this.getDate()} addReport={this.addReport} />
						<AppTodo />
					</div>

					<div className='grid-rep'>
						<DayReports reports={this.state.journalReports} />
					</div>
				</div>
			</>
		);
	}
}

export default App;
