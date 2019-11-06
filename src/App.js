import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import Alert from './components/Layout/Alert';
import About from './components/Pages/About';


import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [alert,
		setAlert] = useState(null);
		
  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar item='123'/>
          <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                <React.Fragment>
                  <Search setAlert={showAlert}/>
                  <Users/>
                </React.Fragment>
              )}/>
              <Route exact path='/about' component={About}/>
              <Route
                exact
                path='/user/:login'
								component={User}
                />)}/>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );

};

export default App;