import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <header>
          <h2>My Stuff</h2>
        </header>

        <p>
          <Link to='/stuff'>See the List</Link>
        </p>
      </div>
    );
  }

}