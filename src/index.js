import React, { Component } from 'react'
import Tree from './Tree';

export default class TreeCreator extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div >
          <Tree data={this.props.data}/>
      </div>
    )
  }
}
