import React, { Component } from 'react';
import './style/journalApp.css';
import Header from './layout/HeaderJournal';
import AddReport from './addReport';
import AppTodo from './todoApp';

class App extends Component {
	state = {
		journalReports: []
	};
	render() {
		return (
			<div className='wrapper'>
				<Header className='header'></Header>
				<div className='mainreport'>
					<AddReport></AddReport>
					<div></div>
					<AppTodo />
				</div>
			</div>
		);
	}
}

export default App;
