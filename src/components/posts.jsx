import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      this.setState({ posts: res.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <ul>
            <li key={post.id}>{post.title}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Posts;