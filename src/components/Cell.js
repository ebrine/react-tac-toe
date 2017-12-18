import React, { Component } from 'react';
import $ from 'jquery'

class Cell extends Component {
  constructor() {
    super();
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.getColor = this.getColor.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
    }
  }
  onClick(event) {
    if (this.props.letter === " " && this.props.canMove) {
      this.props.onClick(event);
    }
  }
  getColor() {
    if (this.props.letter === ' ') {
      return '#DBB1BC'
    }
    else if (this.props.letter === 'x') {
      return '#FF5E5B'
    }
    else if (this.props.letter === 'o') {
      return '#B8DBD9'
    }
  }

  mouseEnter(event) {
    if (this.props.letter === " "){
      console.log(event.target.id)
      $(`#${event.target.id}`).css('background-color', '#cb8e9e')
    }
  }

  mouseLeave(event) {
    if (this.props.letter === " "){
      console.log(event.target.id)
      $(`#${event.target.id}`).css('background-color', '#DBB1BC')
    }
  }

  render() {
    return (
      <div className="cell" id={this.props.num} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.onClick}
      style={{backgroundColor: this.getColor()}}>
      <h1>{this.props.letter}</h1>
      </div>
    );
  }
}

export default Cell;
