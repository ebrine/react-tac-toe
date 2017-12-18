import React, {Component} from 'react'
import ScoreCard from './ScoreCard'
import Board from './Board'
import Banner from './Banner'
import $ from 'jquery'


class Game extends Component {
  constructor() {
    super();
    this.declareWinner = this.declareWinner.bind(this);
    this.state = {
      isWon: false,
      yourScore: 0,
      computerScore: 0,
    }
  }

  declareWinner(winner) {
    this.setState({isWon: true})
    if (winner === 'o') {
      this.setState({computerScore: this.state.computerScore += 1})
    } else if (winner === 'x') {
      this.setState({yourScore: this.state.yourScore += 1})
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
            <Banner show={this.state.isWon} resetBoard={this.resetBoard}/>
            <Board isWon={this.state.isWon} declareWinner={this.declareWinner} />
          </div>
        </div>
      </div>
      </div>)
  }
}

export default Game;
