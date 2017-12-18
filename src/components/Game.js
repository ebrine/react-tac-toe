import React, {Component} from 'react'
import ScoreCard from './ScoreCard'
import Board from './Board'
import $ from 'jquery'


class Game extends Component {
  constructor() {
    super();
    this.resetBoard = this.resetBoard.bind(this);
    this.declareWinner = this.declareWinner.bind(this);
    this.state = {
      winner: false,
      yourScore: 0,
      computerScore: 0,
    }
  }

  resetBoard() {
    console.log("Rst board clicked")
    this.setState({winner: false})
  }

  declareWinner(winner) {
    if (winner === 'o') {
      this.setState({winner: 'Computer'})
      this.setState({computerScore: this.state.computerScore += 1})
    } else if (winner === 'x') {
      this.setState({winner: 'You'})
      this.setState({yourScore: this.state.yourScore += 1})
    } else if (winner === 'tie') {
      this.setState({winner: 'Tie'})
    }
  }

  render(){
    return(<div>
      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ScoreCard yourScore={this.state.yourScore} computerScore={this.state.computerScore}/>
          </div>
          <div className='col-md-8'>
            <Board resetBoard={this.resetBoard} winner={this.state.winner} declareWinner={this.declareWinner} />
          </div>
        </div>
      </div>
      </div>)
  }
}

export default Game;
