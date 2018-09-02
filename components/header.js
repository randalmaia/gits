import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div>
        Hello World {this.props.agent}
      </div>
    )
  }
}