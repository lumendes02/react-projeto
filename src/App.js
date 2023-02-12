import './App.css';
import { Component } from 'react';


class App extends Component {
    state = {
      posts: []
    };
  
    componentDidMount() {
      this.loadPosts();
    }

    loadPosts = async () => {
      const postsReponse = fetch('https://jsonplaceholder.typicode.com/posts');
      const photosReponse = fetch('https://jsonplaceholder.typicode.com/photos');

      const [posts, photos] = await Promise.all([postsReponse,photosReponse]);

      const postsjson = await posts.json();
      const photosjson = await photos.json();

      const postsAndPhotos = postsjson.map((post, index) => {
        return {...post, cover: photosjson[index].url}
      });

      this.setState({posts: postsAndPhotos})
    }
    

  render() {
    const {posts} = this.state;

    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title}></img>
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <h2>{post.body}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
