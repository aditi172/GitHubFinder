import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Verify from './pages/Verify';
import Select from './pages/Select';
import Individual from './forms/Individual';
import Company from './forms/Company';
import Display from './pages/Display';
import './App.css';
                // "format": "data-url",

const App=()=> {
  return (
    <Router>
      <Fragment>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Verify} />
            <Route exact path="/select" component={Select}></Route>
            <Route exact path="/individual" component={Individual}></Route>
            <Route exact path="/company" component={Company}></Route>
            <Route exact path="/success" component={Display}></Route>

          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
