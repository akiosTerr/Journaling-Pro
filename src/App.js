import React, { Component } from 'react';
import JournalApp from './components/journalApp';
import Header from './components/layout/HeaderMain';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header className='header' />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route exact path='/' component={JournalApp} />
			</BrowserRouter>
		);
	}
}
