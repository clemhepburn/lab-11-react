import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>My Belongings</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/stuff">My Stuff</NavLink>
        </nav>
        
      </header>
    );
  }

}
 
export default Header;