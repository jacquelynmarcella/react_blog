import React, { Component } from 'react';
import './App.css';
import Comment from './Comments.js';
import Author from './Author.js';

class Blog extends Component {
  render() {
  	      const allPosts = this.props.posts.map( post => {
        return (
          <div class="post">
            <h1 className="Title">{post.title}</h1>
            <Author author={post.author} />
            <p className="Post-intro">
              {post.content}
            </p>
            <Comment comments={post.comments} />
          </div>
        );
      })
    return (
      <div>
      	{allPosts}
      </div>
    );
  }
}

export default Blog;
