import React, { Component } from 'react';

class Comment extends Component {
	render() {
		const allComments = this.props.comments.map( comment => {
			return <p>{comment}</p>
		});
		return (
			<div className="comments">
				<h4>Comments</h4>
				{ allComments }
			</div>
		);
	}
}

export default Comment;