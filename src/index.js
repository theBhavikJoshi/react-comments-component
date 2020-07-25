import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Components/Comment';

const App = () => {
	return (
		<div className="ui container comments">
            <Comment 
                commentAuthor='Github' 
                commentAvatar={faker.image.avatar()}
                commentTime='Yesterday at 2:00 PM'
                commentText='Great post man'
            />
            <Comment 
                commentAuthor='Facebook'
                commentAvatar={faker.image.avatar()}
                commentTime='Yesterday at 4:30 PM'
                commentText='Aweomse post'
            />
            <Comment 
                commentAuthor='Twitter'
                commentAvatar={faker.image.avatar()}
                commentTime='Yesterday at 5:45 PM'
                commentText='Loved it!'
            />
            <Comment 
                commentAuthor='Instagram'
                commentAvatar={faker.image.avatar()}
                commentTime='Today at 12:00 PM'
                commentText='That was stupid!'
            />
            <Comment 
                commentAuthor='Linkedin'
                commentAvatar={faker.image.avatar()}
                commentTime='Today at 10:00 PM'
                commentText='Got a question'
            />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));
