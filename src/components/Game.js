import React, {Component} from 'react'
import ScoreCard from './ScoreCard'
import Board from './Board'

class Game extends Component {
  render(){
    return(<div>
      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ScoreCard />
          </div>
          <div className='col-md-8'>
            <Board />
          </div>
        </div>
      </div>
      </div>)
  }
}

export default Game;
