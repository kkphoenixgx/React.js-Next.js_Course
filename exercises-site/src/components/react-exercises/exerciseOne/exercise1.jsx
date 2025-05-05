import { Component } from "react";
import "./reactExercise.css";
import { Post } from "./exerciseOne-components/Posts/Post";
import { fetchPosts } from "./exerciseOne-Utils/fetchPosts";
import { PostsButton } from "./exerciseOne-components/loadMorePostsButton/PostsButton";

export default class ExerciseOne extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
  };
  
  componentDidMount() {
    this.loadPosts();
  }
  
  loadPosts = async () => {
    const {page, postsPerPage} = this.state; 
    let postsAndPhotos = await fetchPosts();

    this.setState(
      { 
        posts: postsAndPhotos.slice(page, postsPerPage),
        allPosts: postsAndPhotos
      }
    );
  }

  loadMorePosts = ()=>{
    const { posts, allPosts, postsPerPage, page } = this.state
  
    const nextPage = page + postsPerPage;
    const nextPosts  = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
  
    this.setState({posts, page: nextPage});
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

        <PostsButton text="More Posts!" callback={this.loadMorePosts} />

      </section>
    );
  }
}