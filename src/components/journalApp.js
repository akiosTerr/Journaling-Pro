import React, { Component } from 'react';
import './style/journalApp.css';
import AddReport from './addReport';
import AppTodo from './todoApp';
import DayReports from './dayReports';
import uuid from 'uuid';

class App extends Component {
	state = {
		journalReports: [
			{
				id: uuid.v4(),
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				date: '14/12/1945',
			},
		],
	};

	getDate = () => {
		let d = new Date();
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	};

	addReport = (content) => {
		const newReport = {
			id: uuid.v4(),
			username: 'Akios',
			date: this.getDate(),
			content,
		};

		this.setState({
			journalReports: [...this.state.journalReports, newReport],
		});
	};

	delReport = (id) => {
		if (!window.confirm('Are you sure you wish to delete this item?')) {
			return;
		}

		this.setState({
			journalReports: [
				...this.state.journalReports.filter((rep) => rep.id !== id),
			],
		});
	};

	render() {
		return (
			<>
				<div className='wrapper'>
					<div className='gridCap'>
						<AddReport
							className='grid-item addReport'
							date={this.getDate()}
							addReport={this.addReport}
						/>
						<div className='grid-item reportFeed'>
							<DayReports
								delRep={this.delReport}
								className='dayReports'
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
