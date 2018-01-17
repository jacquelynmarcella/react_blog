import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Author from './Author.js';

let postContent = {
  title: "My first post",
  author: "Jacquelyn",
  body: "Learning to post in React",
  comments: [
    "First",
    "Yay",
    "Interesting"
    ]
}

let allAuthors = [
  "Mr Iguana",
  "T-Rex",
  "Cool Guy"
]

class Post extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{postContent.title}</h1>
          <h3>by {postContent.author}</h3>
        </header>
        <p className="App-intro">
          {postContent.body}
        </p>
        {allAuthors.map( allAuthors => <Author body={allAuthors} /> )}
        <h4>Comments</h4>
        {postContent.comments.map( comments => <blockquote>{comments}</blockquote> )}
      </div>
    );
  }
}

export default Post;
