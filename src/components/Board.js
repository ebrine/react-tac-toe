import React, {Component} from 'react'
import Cell from './Cell'

class Board extends Component {
  constructor() {
    super();
    this.createCell = this.createCell.bind(this);
    this.cellClick = this.cellClick.bind(this);
  }
  cellClick(event) {
    console.log('hi')
    this.createCell(event.target.id, 'K')
  }
  createCell(num, value) {
    return <Cell num={num} key={num} value={value} onClick={this.cellClick} />
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
