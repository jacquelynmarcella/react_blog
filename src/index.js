import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import Author from './Author';
import registerServiceWorker from './registerServiceWorker';

let posts = [{
	title: "My first post",
	author: "Mr Iguana", 
	content: "Learning to post in React",
	comments: [
		"First",
    	"Yay",
    	"Interesting"
    ]
  },
  {
	title: "My second post",
	author: "Cool Guy", 
	content: "Learning to post in React, still",
	comments: [
    	"First!!",
    	"Yay!!",
    	"Interesting!!"
  	]
}]

ReactDOM.render(<Post posts={posts} />, document.getElementById('root'));
registerServiceWorker();
