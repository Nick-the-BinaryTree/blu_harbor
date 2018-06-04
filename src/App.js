import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Arrival, Food, Social, Amenities } from './components';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1><Link to={process.env.PUBLIC_URL + "/"}>Welcome to Blu Harbor</Link></h1>
            <ul>
              <li><Link to={process.env.PUBLIC_URL + "/arrival"}>Arrival</Link></li>
              <li><Link to={process.env.PUBLIC_URL + "/food"}>Food</Link></li>
              <li><Link to={process.env.PUBLIC_URL + "/social"}>Social</Link></li>
              <li><Link to={process.env.PUBLIC_URL + "/amenities"}>Amenities</Link></li>

            </ul>
          </header>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route path={process.env.PUBLIC_URL + "/arrival"} component={Arrival} />
          <Route path={process.env.PUBLIC_URL + "/food"} component={Food} />
          <Route path={process.env.PUBLIC_URL + "/social"} component={Social} />
          <Route path={process.env.PUBLIC_URL + "/amenities"} component={Amenities} />
        </div>
      </Router>
    );
  }
}

export default App;
