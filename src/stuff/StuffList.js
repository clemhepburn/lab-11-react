import React, { Component } from 'react';
import StuffItem from './StuffItem';
import './StuffList.css';

class StuffList extends Component {

  render() {
    const { stuff } = this.props;
    return (
      <ul className="StuffList">
        {stuff.map(thing => (
          <StuffItem key={thing.id} thing={thing} />
        ))}
      </ul>
    );
  }
}


export default StuffList;