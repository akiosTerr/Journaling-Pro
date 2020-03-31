import React, { Component } from 'react';
import JournalApp from './components/journalApp';
import Header from './components/layout/HeaderMain';

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
