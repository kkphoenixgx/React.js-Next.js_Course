import { Component } from "react";
import "../../Stylesheet/exercises/reactExercise.css";

export default class ExerciseOne extends Component {
  state = {
    posts: []
  };
  
    componentDidMount() {
    this.loadPosts();
  }
  
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    
    const postsJson = await posts.json()
    const photosJson = await photos.json();
    
    const postsAndPhotos = postsJson.map((post, index) => {
        const newUrl = photosJson[index].url.replace('https://via.placeholder.com', 'https://picsum.photos/seed').split("/")
        const p1 = newUrl[newUrl.length - 1] 
        const p2 = newUrl[newUrl.length - 2]
 
        newUrl[newUrl.length - 1] = p2
        newUrl[newUrl.length - 2] = p1
        
        return { ...post, cover: newUrl.join("/") };
    })
    
    this.setState({ posts: postsAndPhotos });
  }
  
  
   render() {
    const { posts } = this.state;
    
     return (
      <section className="react-exerciseOne-container">
        <h2>Fetch posts from json api 2025-02-03 </h2>
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}