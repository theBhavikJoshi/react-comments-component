import React from 'react';

const Comment = props => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img src={props.commentAvatar} alt="avatar" />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.commentAuthor}
				</a>
				<div className="metadata">
					<span className="date">{props.commentTime}</span>
				</div>
				<div className="text">{props.commentText}</div>
			</div>
		</div>
	);
}

export default Comment;
