import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Arrival, Food, Social, Amenities } from './components';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router baseurl={process.env.PUBLIC_URL}>
        <div className="App">
          <header>
            <h1><Link to="/">Welcome to Blu Harbor</Link></h1>
            <ul>
              <li><Link to="/arrival">Arrival</Link></li>
              <li><Link to="/food">Food</Link></li>
              <li><Link to="/social">Social</Link></li>
              <li><Link to="/amenities">Amenities</Link></li>

            </ul>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/arrival" component={Arrival} />
          <Route path="/food" component={Food} />
          <Route path="/social" component={Social} />
          <Route path="/amenities" component={Amenities} />
        </div>
      </Router>
    );
  }
}

export default App;
