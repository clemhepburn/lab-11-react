import { Component } from 'react';
import StuffList from './StuffList';
import { getStuff } from '../utils/stuff-api';
import './StuffPage.css';

export default class StuffPage extends Component {
  state = {
    stuff: []
  }

  async componentDidMount() {
    const stuff = await getStuff();
    if (stuff) {
      this.setState({ stuff: stuff });
      console.log(stuff);
    } else {
      console.log('no stuff!');
    }
  }

  render() {
    const { stuff } = this.state;
    return (
      <div className="StuffPage">
        <StuffList stuff={stuff} />
      </div>
    ); 
    
  }
}