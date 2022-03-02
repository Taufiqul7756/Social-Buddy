import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {userId,id,title,body}= props.post;
    const history = useHistory();

    const postHandler = id => {
        const url =`post/${id}`;
        history.push(url);
    }

    const postStyle ={
        border:'1px solid black',
        marginTop:'20px',
        borderRadius:'20px',
        textAlign:'center'
    }
    return (
        <div style={postStyle}>
            <h3> <strong>{id} : </strong>Title: {title}</h3>
            <p>{body}</p>
            <button onClick={()=> postHandler(id)}>Details</button>
        </div>
    );
};

export default Post;