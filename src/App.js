import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Importing components
import Food from './Food.js';
import Movie from './Movie.js';
import Blog from './Blog.js';
import About from './About.js';
import Home from './Home.js';
import Comment from './Comments.js';
import Author from './Author.js';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/movie">Movie</Link>
            <Link to="/food">Food</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={
            () => (<Blog posts={this.props.posts} /> 
              )} />
          <Route path="/about" component={About} />
          <Route path="/food" component={Food} />
          <Route path="/movie" component={Movie} />
        </div>
      </Router>
   {/*     {allPosts}*/}
      </div>
    );
  }
}

export default App;
