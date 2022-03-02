import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setPosts]= useState([]);

    useEffect(()=> {
        const url ='https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h1>This is Home</h1>
            <h4>I have Got {posts.length} posts</h4>

            {
                posts.map(post=> <Post post ={post}> </Post>)
            }
        </div>
    );
};

export default Home;