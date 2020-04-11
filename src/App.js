import React, { Component } from 'react';
import JournalApp from './components/journalApp';
import Header from './components/layout/HeaderMain.jsx';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header className='header' />

				<JournalApp></JournalApp>
			</div>
		);
	}
}
