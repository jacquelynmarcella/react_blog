import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Author extends Component {
	render() {
		return (
			<div>
				<h4>Written by: {this.props.body}</h4>
				{ console.log(this) }
			</div>
		);
	}
}

export default Author;
