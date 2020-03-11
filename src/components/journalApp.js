import React, { Component } from 'react';
import './style/journalApp.css';
import Header from './layout/HeaderJournal';
import AddReport from './addReport';
import AppTodo from './todoApp';
import DayReports from './dayReports';
import axios from 'axios';

class App extends Component {
	state = {
		journalReports: []
	};

	getDate = () => {
		let d = new Date();
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	};

	componentDidMount = () => {
		this.loadReports();
	};

	loadReports = () => {
		axios
			.get('http://localhost:5000/reports/')
			.then(res => {
				if (res.data.length > 0) {
					let repArr = res.data.map(obj => {
						return {
							id: obj._id,
							date: obj.date,
							content: obj.content
						};
					});
					console.log(repArr);

					this.setState({ journalReports: [...repArr.reverse()] });
				}
			})
			.catch(err => {
				console.log('Error: ', err);
			});
	};

	addReport = content => {
		const newReport = {
			username: 'Akios',
			date: this.getDate(),
			content
		};

		axios
			.post('http://localhost:5000/reports/add', newReport)
			.then(res => {
				console.log(res.data);
				this.loadReports();
			})
			.catch(err => console.log('Error: ', err));
	};

	delReport = id => {
		axios
			.delete('http://localhost:5000/reports/' + id)
			.then(res => console.log(res.data))
			.catch(err => {
				console.log('Error: ' + err);
				return false;
			});

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
