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

	delReport = id => {
		this.setState({
			journalReports: [
				...this.state.journalReports.filter(rep => rep.id !== id)
			]
		});
	};

	render() {
		return (
			<>
				<Header className='header' />
				<div className='wrapper'>
					<div className='gridCap'>
						<AddReport
							className='grid-item addReport'
							date={this.getDate()}
							addReport={this.addReport}
						/>
						<div className='reportFeed'>
							<DayReports
								delRep={this.delReport}
								className='grid-item dayReports'
								reports={this.state.journalReports}
							/>
						</div>
						<AppTodo className='grid-item appTodo' />
					</div>
				</div>
			</>
		);
	}
}

export default App;
