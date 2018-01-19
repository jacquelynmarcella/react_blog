import React, { Component } from 'react';

class Comment extends Component {
	render() {
		const allComments = this.props.comments.map( comment => {
			return <p>&lsquo;{comment}&rsquo;</p>
		});
		return (
			<div>
			<h4>Comments</h4>
			<p className="comments">{ allComments }</p>
			</div>
		);
	}
}

export default Comment;