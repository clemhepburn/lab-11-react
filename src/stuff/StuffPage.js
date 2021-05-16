import { Component } from 'react';
import StuffList from './StuffList';
import { getStuff } from '../utils/stuff-api';
import './StuffPage.css';

export default class StuffPage extends Component {
  state = {
    stuff: []
  }

  async componentDidMount() {
    try {
      const stuff = await getStuff();
      this.setState({ stuff: stuff });
    }
    catch (err) {
      console.log(err.message);
    }
  }


  render() {
    const { stuff } = this.state;
    return (
      <div className="StuffPage">
        <h2>List of My Things</h2>
        <StuffList stuff={stuff} />
      </div>
    ); 
    
  }
}