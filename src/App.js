import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
	const isLoggedIn = localStorage.getItem('token');
	return (
		<Router>
			<div className='App'>
				<ul>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/logout'>Logout</Link>
					</li>
				</ul>
				<div>{isLoggedIn && <p>Welcome {localStorage.getItem('username')}</p>}</div>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/logout' component={Logout} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
