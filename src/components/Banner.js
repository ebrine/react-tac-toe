import React, {Component} from 'react'

class Banner extends Component {
  render(){
    return(<div>
       <div className="banner" style={{display: this.props.winner ? 'block' : 'none' }}>
       <p className='bannertext'>{this.props.winner} win(s)</p>
       <div className='reset' onClick={this.props.resetBoard}>Play Again</div>
       </div>

      </div>)
  }
};

export default Banner;
