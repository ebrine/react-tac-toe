import React, {Component} from 'react'
import ScoreCard from './ScoreCard'
import Board from './Board'
import $ from 'jquery'


class Game extends Component {
  constructor() {
    super();
    this.declareWinner = this.declareWinner.bind(this);
    this.state = {
      yourScore: 0,
      computerScore: 0,
    }
  }

  declareWinner(winner) {
    if (winner === 'o') {
      this.setState({computerScore: this.state.computerScore += 1})
    } else if (winner === 'x') {
      this.setState({yourScore: this.state.yourScore += 1})
    }
    console.log(`winner declared: ${this.state.winner}`)
  }

  render(){
    return(<div>
      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ScoreCard yourScore={this.state.yourScore} computerScore={this.state.computerScore}/>
          </div>
          <div className='col-md-8'>
            <Board declareWinner={this.declareWinner} />
          </div>
        </div>
      </div>
      </div>)
  }
}

export default Game;
