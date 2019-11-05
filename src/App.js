import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import axios from 'axios';

import './App.css';

 class App extends Component {
	state = {
		users: [],
		loading: false
	};

	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const res = await axios.get(`https://api.github.com/users?client_id=$
	// 	{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
	// 	{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
	// 	this.setState({ loading: false, users: res.data });
	// };

	searchUsers = async (text) => {
		
		const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
		{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
		{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
		this.setState({ loading: false, users: res.data.items });
	};

  render() {

		return (
			<div>
				<Navbar item='123' />
				<div className="container">
				 	<Search searchUsers={this.searchUsers}/>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
				
				<h1>Hello </h1>
			</div>
		);
  };
};

export default App;