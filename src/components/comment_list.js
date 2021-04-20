import React from 'react';
import uuid from 'uuid/V4';
import { connect } from 'react-redux';

const CommentList = props => {
   const list = props.comments.map(comment => {
     console.log(comment.submittedDate);
       return <li key={uuid()}><strong>Comment:</strong> {comment.comment} : <strong>Created Date:</strong> {comment.submittedDate}  <strong>Author:</strong> {comment.author} </li>;
  });

  return (
    <ul className="comment-list">
      {list}
    </ul>
  );
};

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
