import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          <li>{this.props.link.description} ({this.props.link.url})</li>
        </div>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }
}

export default Link