import React, { Component } from 'react'

export default class CommentBox extends Component {
  state = {
    comment: ''
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO - Call an action creator
    this.setState({ comment: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} name="" id="" cols="30" rows="10"/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

