import React, { Component } from 'react';
import './style/journalApp.css';
import Header from './layout/HeaderJournal';
import AddReport from './addReport';

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
				</div>
			</div>
		);
	}
}

export default App;
