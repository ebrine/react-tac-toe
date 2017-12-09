import React, { Component } from 'react';
import $ from 'jquery'

class Cell extends Component {
  constructor() {
    super();
    this.getColor = this.getColor.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
    }
  }
  onClick(event) {
    if (this.props.letter === " " && this.props.canMove) {
      this.props.onClick(event);
      $(`#${event.target.id}`).css('background-color', '#EAC8CA')
    }
  }
  getColor() {
    if (this.props.letter === ' ') {
      return '#BFABCB'
    }
    else if (this.props.letter === 'x') {
      return '#EAC8CA'
    }
    else if (this.props.letter === 'o') {
      return '#8D89A6'
    }
  }

  render() {
    return (
      <div className="cell" id={this.props.num} onClick={this.onClick}
      style={{backgroundColor: this.getColor()}}>
      <h1>{this.props.letter}</h1>
      </div>
    );
  }
}

export default Cell;
