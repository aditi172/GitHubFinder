import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App =()=>{

      return (
      <GithubState> 
        <AlertState>
          <BrowserRouter>
            <div className="App">
              <Navbar></Navbar>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/users/:login" component={User}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </AlertState>
      </GithubState>
    );
  }

export default App;
