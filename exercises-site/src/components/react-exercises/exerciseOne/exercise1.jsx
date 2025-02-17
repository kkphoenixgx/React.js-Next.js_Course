import { Component } from "react";
import "./reactExercise.css";
import { Post } from "./exerciseOne-components/Post";
import { fetchPosts } from "./exerciseOne-Utils/fetchPosts";

export default class ExerciseOne extends Component {
  state = {
    posts: []
  };
  
  componentDidMount() {
    this.loadPosts();
  }
  
  loadPosts = async () => {
    let postsAndPhotos = await fetchPosts();
    this.setState({ posts: postsAndPhotos });
  }
  
  
  render() {
    const { posts } = this.state;
    
     return (
      <section className="react-exerciseOne-container">
        <h2>Fetch posts from json api 2025-02-03 </h2>
        <div className="posts">
          {posts.map(post => (
            <Post key={post.id} cover={post.cover} title={post.title} id={post.id} body={post.body} />
          ))}
        </div>
      </section>
    );
  }
}