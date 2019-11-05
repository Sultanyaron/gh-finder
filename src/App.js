import React, {Component} from 'react';
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

  searchUsers = async(text) => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
		{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
		{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({loading: false, users: res.data.items});
  };

  clearUsers = () => this.setState({users: [], loading: false});

  render() {
		const { users, loading } = this.state;
    return (
      <div>
        <Navbar item='123'/>
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0
            ? true
            : false}/>
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  };
};

export default App;