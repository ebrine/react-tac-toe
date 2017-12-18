import React, {Component} from 'react'

class ScoreCard extends Component {
  render(){
    return(<div>
      <h1>Score</h1>
      <h2>You: {this.props.yourScore}</h2>
      <h2>Computer: {this.props.computerScore}</h2>
      </div>)
  }
};

export default ScoreCard;
