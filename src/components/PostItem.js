import React from 'react';

function AuthorInfo({ author, date }) {
  return (
    <div className='authorInfo'>
      <img className='avatar' src={author.avatar} />
      <div className='deitails'>
        <span id='author-post'>{author.name}</span>
        <span id='date-post'>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className='post-comments'>
      <div className='divider' />
      {comments.map(comment => (
        <div className='comment' key={comment.id}>
          <img className='avatar' src={comment.author.avatar} />
          <p>
            <span id='author-name'>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, comments, content }) {
  return (
    <div className='post'>
      <AuthorInfo author={author} date={date} />
      <p className='post-content'>{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
