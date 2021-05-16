import { Component } from 'react';
import { Link } from 'react-router-dom';
import './StuffItem.css';

export default class StuffItem extends Component {

  render() {
    const { thing } = this.props;

    return (
      <li className="StuffItem">
        <Link to={`/stuff/${thing.id}`}>
          <div>
            <h2>{thing.name}</h2>
            <div>{thing.type}</div>
            <div>{thing.description}</div>
            <div>{thing.color}</div>
          </div>
        </Link>
      </li>
    );
  }
}