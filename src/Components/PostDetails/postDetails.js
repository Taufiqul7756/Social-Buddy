import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const {id}= useParams();
    const [post,setPost] =useState({});
    const [comments,setComments] =useState([]);


    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[id])

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[id])

    const postStyle ={
        border:'1px solid black',
        marginTop:'20px',
        borderRadius:'20px',
        textAlign:'center'
    }
    return (
        <div style={postStyle}>
            <h3>This is Post Details.{ id}</h3>
            <p>Post ID: {post.id}</p>
            <h4>Title: {post.title}</h4>

            <p>Number of Comments: {comments.length}</p>
            {
                comments.map(comment =><Comment comment ={comment}></Comment>)
            }
        </div>

        
    );
};

export default PostDetails;