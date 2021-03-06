import React, {Component} from 'react'
import Cell from './Cell'
import Banner from './Banner'
import $ from 'jquery'


class Board extends Component {
  constructor() {
    super();
    this.resetBoard = this.resetBoard.bind(this);
    this.createCell = this.createCell.bind(this);
    this.createLoadingCell = this.createLoadingCell.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.play = this.play.bind(this)
    this.checkWinner = this.checkWinner.bind(this)
    this.state = {
      letters: [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      loading: true,
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'https://eb-tic-tac-toe.herokuapp.com/?board=xxx+++ooo'
    }).then((response) => {
      setTimeout(() => {
        this.setState({loading: false});
      }, 3000);
    })
    .catch(error => {
      console.log(error);
    })
  }

  play() {
    let board_param = this.state.letters.join('').replace(/\s/g, '+')
    $.ajax({
      url:`https://eb-tic-tac-toe.herokuapp.com/?board=${board_param}`
    }).done((response) => {
      if (response === 'x' || response === 'o') {
        this.props.declareWinner(response)
      }
      else {
        this.setState({letters: response.split('')})
        this.checkWinner()
      }
    })
    .catch(error => {
      this.checkWinner()
    })
  }

  checkWinner() {
    if (this.state.letters.includes(' ') === false) {
      this.props.declareWinner("tie")
    }
    else {
      let board_param = this.state.letters.join('').replace(/\s/g, "+")
      $.ajax({
        url: `https://eb-tic-tac-toe.herokuapp.com/winner?board=${board_param}`
      }).done((response) => {
        if (response === 'x' || response === 'o') {
          this.props.declareWinner(response)
        }
      })
    }
  }

  cellClick(event) {
    let array = this.state.letters
    array[event.target.id - 1] = 'x'
    this.setState( {letters: array })
    this.play()
  }

  createCell(num) {
    return <Cell num={num} key={num} canMove={!this.props.isWon} letter={this.state.letters[num-1]} onClick={this.cellClick} />
  }

  createLoadingCell() {
    return <div className='loadingcell'></div>
  }

  resetBoard() {
    this.setState({letters: [' ',' ',' ',' ',' ',' ',' ',' ',' ']});
    this.props.resetBoard();
  }

  render(){
    if (this.state.loading) {
      return(
        <div className="board">
        {[1,2,3,4,5,6,7,8,9].map(() => this.createLoadingCell())}
        </div>
      )
    } else {
    return(<div>
      <Banner winner={this.props.winner} resetBoard={this.resetBoard}/>
      <div className="board">
      {[1,2,3,4,5,6,7,8,9].map((num) => this.createCell(num))}
      </div>
      </div>)
    }
  }
}

export default Board;
