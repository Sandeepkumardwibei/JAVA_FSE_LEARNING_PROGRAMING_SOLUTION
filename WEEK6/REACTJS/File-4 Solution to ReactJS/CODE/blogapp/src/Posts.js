// src/Posts.js
import React from "react";
import Post from "./Post"; // ✅ safe and explicit


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  // ✅ Fetch posts from API
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }))
      .catch((err) => this.setState({ error: err }));
  };

  // ✅ Lifecycle hook - componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // ✅ Lifecycle hook - componentDidCatch
  componentDidCatch(error, info) {
    alert("An error occurred: " + error.toString());
    this.setState({ error });
  }

  // ✅ Render method
  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2>Error loading posts.</h2>;
    }

    return (
      <div>
        <h2>Posts</h2>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
