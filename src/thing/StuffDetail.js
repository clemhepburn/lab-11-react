import { Component } from 'react';
import { getThing } from '../utils/stuff-api';
import './StuffDetail.css';

export default class StuffDetail extends Component {
  state = {
    thing: null
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const thing = await getThing(match.params.id);
      this.setState({ thing: thing });
    }
    catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { thing } = this.state;
    if (!thing) return null;

    return (
      <div className="StuffDetail">
        <h1>{thing.name}</h1>
        <div>{thing.type}</div>
        <div>{thing.description}</div>
        <div>{thing.isSentimental && 'This thing is sentimental.'}</div>
        <div>{thing.yearAcquired}</div>
        <div>{thing.color}</div>
      </div>
    );
  }
}