import React, {Component} from 'react'
import Cell from './Cell'
import $ from 'jquery'


class Board extends Component {
  constructor() {
    super();
    this.createCell = this.createCell.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.play = this.play.bind(this)
    this.checkWinner = this.checkWinner.bind(this)
    this.state = {
      winner: false,
      letters: [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    }
  }

  play() {
    let board_param = this.state.letters.join('').replace(/\s/g, '+')
    $.ajax({
      url:`https://eb-tic-tac-toe.herokuapp.com/?board=${board_param}`
    }).done((response) => {
      if (response === 'x' || response === 'o') {
        this.setState({ winner: response })
      }
      else {
        this.setState({letters: response.split('')})
        this.checkWinner()
      }
    })
  }

  checkWinner() {
    let board_param = this.state.letters.join('').replace(/\s/g, "+")
    $.ajax({
      url: `https://eb-tic-tac-toe.herokuapp.com/winner?board=${board_param}`
    }).done((response) => {
      if (response === 'x' || response === 'o') {
        this.setState({ winner: response })
      }
    })
  }

  cellClick(event) {
    let array = this.state.letters
    array[event.target.id - 1] = 'x'
    this.setState( {letters: array })
    this.play()
  }
  createCell(num) {
    return <Cell num={num} key={num} canMove={!this.state.winner} letter={this.state.letters[num-1]} onClick={this.cellClick} />
  }
  render(){
    return(<div >
      <h1>Board</h1>
      <h1 style={{display: this.state.winner ? 'block' : 'none' }}>{this.state.winner} is the winner</h1>
      <div className="board">
      {[1,2,3,4,5,6,7,8,9].map((num) => this.createCell(num))}
      </div>
      </div>)
  }
}

export default Board;
