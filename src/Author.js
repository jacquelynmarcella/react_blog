import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.js';
import './Comments.js';

class Author extends Component {
	render() {
		return (
			<div>
				<h4><em>Written by: {this.props.author}</em></h4>
				{ console.log(this) }
			</div>
		);
	}
}

export default Author;
