import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import About from './pages/About';
import User from './components/users/User';


class App extends Component {

  state={
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: []
  };

  async componentDidMount() {
    this.setState({loading: true});
    const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&sclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data, loading: false});
  }

  searchUser=async (search)=> {
    this.setState({loading: true});
    const res= await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&sclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false});
  }

  clearUser=()=> {
    this.setState({ users: [], loading: false});
  }
  setAlert=(msg, type)=> {
    this.setState({alert: {
      msg, type
    }})
    setTimeout(()=> this.setState({alert:null}), 3000);
  }

  getUser=async (username)=> {
    this.setState({loading: true});
    const res= await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&sclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    this.setState({user: res.data, loading: false});
  }

  getUserRepos= async (username)=> {
    this.setState({loading: true});
    const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&sclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    this.setState({repos: res.data, loading: false});
  }

  render() {
    const {users, loading, repos, alert, user}= this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" render={props=> (
                <Fragment>
                  <Alert alert={alert}></Alert>
                  <Search searchUser={this.searchUser} clearUser={this.clearUser} 
                  showClear={users.length>0? true: false}
                  setAlert={this.setAlert}></Search>
                  <Users loading={loading} users={users}></Users>
                </Fragment>
              )}>
              </Route>
              <Route path="/about" component={About}></Route>
              <Route path="/users/:login" render={props=> (
                <User {...props} 
                  getUser={this.getUser} 
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                  user={user} 
                  loading={loading}>
                </User>
              )}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
