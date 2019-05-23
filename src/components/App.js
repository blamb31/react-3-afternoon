import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import axios from 'axios';
import Post from './Post/Post'

let baseUrl = 'https://practiceapi.devmountain.com/api'

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(`${baseUrl}/posts`).then( results => {
      this.setState({
        posts: results.data
      })
    }).catch( () => {
      alert("CDM Fail")
    })
  }

  updatePost(postId, text) {
    axios.put(`${baseUrl}/posts?id=${postId}`, {text}).then( results => {
      this.setState({
        posts: results.data
      })
    }).catch( () => {
      alert("UP Fail")
    })
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />

          {this.state.posts.map( (post) => {
            return <Post id={post.id} 
            updatePostFn={this.updatePost} 
            text={post.text} 
            date={post.date} 
            key={post.id} />
          })}
          
        </section>
      </div>
    );
  }
}

export default App;
