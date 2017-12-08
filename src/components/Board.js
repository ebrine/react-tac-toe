import React, {Component} from 'react'
import Cell from './Cell'
import $ from 'jquery'


class Board extends Component {
  constructor() {
    super();
    this.createCell = this.createCell.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.convertBoard = this.convertBoard.bind(this);
    this.play = this.play.bind(this)
    this.state = {
      // currentBoard: '+++++++++',
      letters: [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    }
  }
  convertBoard(responseString) {
    console.log("response string is" + responseString)
    console.log(this.state.letters.join())
  }

  play() {
    let board_param = this.state.letters.join('').replace(/\s/g, '+')
    $.ajax({
      url:`https://eb-tic-tac-toe.herokuapp.com/?board=${board_param}`
    }).done((response) => {
      console.log(response)
      this.setState({letters: response.split('')})
    })
  }

  cellClick(event) {
    console.log('hi')
    console.log(event)
    let array = this.state.letters
    array[event.target.id - 1] = 'x'
    this.setState( {letters: array })
    this.play()
  }
  createCell(num, value) {
    return <Cell num={num} key={num} letter={this.state.letters[num-1]} onClick={this.cellClick} />
  }
  render(){
    return(<div >
      <h1>Board</h1>
      <div className="board">
      {[1,2,3,4,5,6,7,8,9].map((num) => this.createCell(num, ' '))}
      </div>
      </div>)
  }
}

export default Board;
