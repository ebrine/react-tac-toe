import React, {Component} from 'react'
import ScoreCard from './ScoreCard'
import Board from './Board'
import $ from 'jquery'


class Game extends Component {
  constructor() {
    super();
    // this.play = this.play.bind(this)
    this.state = {
      currentPlayer: "user",
      currentBoard: "+++++++++",
    }
  }
  //
  // play(event) {
  //   let board_param = this.state.currentBoard
  //   $.ajax({
  //     url:`https://eb-tic-tac-toe.herokuapp.com/?board=${board_param}`
  //   }).done((response) => {
  //     console.log(response)
  //     // this.setState({currentBoard: response})
  //     return response
  //   })
  // }

  render(){
    return(<div>
      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ScoreCard />
          </div>
          <div className='col-md-8'>
            <Board playFunction={this.play} />
          </div>
        </div>
      </div>
      </div>)
  }
}

export default Game;
