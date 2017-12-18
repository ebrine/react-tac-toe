import React, {Component} from 'react'

class Banner extends Component {
  render(){
    let message = ''
    if (this.props.winner === "Tie") {
      message = "Tie Game!"
    } else if (this.props.winner === "Computer") {
      message = "Computer Wins!"
    } else if (this.props.winner === "You") {
      message = "You Win!"
    }
    return(<div>
       <div className="banner" style={{display: this.props.winner ? 'block' : 'none' }}>
       <p className='bannertext'>{message}</p>
       <div className='reset' onClick={this.props.resetBoard}>Play Again</div>
       </div>
      </div>)
  }
};

export default Banner;
