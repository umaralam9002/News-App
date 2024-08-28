import React, { Component } from 'react'
import spin from './spin.gif'

export class Loading extends Component {
  render() {
    return (
      <div>
        <img style ={{height:'23px', width:'23px'}} src={spin} alt="Loading"/>
      </div>
    )
  }
}

export default Loading
