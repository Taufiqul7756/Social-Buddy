import React from 'react';

const Comment = (props) => {
    const {name,email}= props.comment;
    return (
        <p>
          <b>Name:</b>  {name} : <b>{email}</b>
        </p>
    );
};

export default Comment;