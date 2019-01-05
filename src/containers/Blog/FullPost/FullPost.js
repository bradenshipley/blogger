import React, { Component } from "react"
import axios from "axios"
import "./FullPost.css"

class FullPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadedPost: null
    }
  }
  componentDidMount() {
    // console.log(this.props)
    if (this.props.match.params.id) {
      if (
        //if there isn't already a post or the post that is currently loaded is different than the post requested
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios
          .get(`/posts/${this.props.match.params.id}`)
          .then(response => this.setState({ loadedPost: response.data }))
          .catch(err => console.log(err))
      }
    }
  }

  deletePostHandler = () => {
    axios
      .delete(`/posts/${this.props.match.params.id}`)
      .then(res => console.log(res))
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!!</p>
    }
    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button className='Delete' onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      )
    }
    return post
  }
}

export default FullPost
