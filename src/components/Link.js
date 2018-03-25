import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.link.description} ({this.props.link.url})</p>
        </div>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }
}

export default Link