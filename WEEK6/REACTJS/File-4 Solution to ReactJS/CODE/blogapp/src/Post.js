// src/Post.js
import React from "react";

class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
