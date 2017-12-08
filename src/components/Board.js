import React, {Component} from 'react'
import Cell from './Cell'

class Board extends Component {
  constructor() {
    super();
    this.createCell = this.createCell.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.convertBoard = this.convertBoard.bind(this);
    this.state = {
      currentBoard: '+++++++++',
      letters: [' ',' ',' ',' ',' ',' ',' ',' ',' ']
    }
  }
  convertBoard(responseString) {
    console.log("response string is" + responseString)
    console.log(this.state.currentBoard)
  }
  cellClick(event) {
    console.log('hi')
    console.log(event)
    this.props.playFunction()
    let array = this.state.letters
    array[event.target.id - 1] = 'o'
    this.setState( {letters: array })
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
