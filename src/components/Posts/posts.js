import React from 'react';
import {useEffect, useState} from 'react';
import {Post} from './Post/post';
const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch ('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => setPosts(value))
     }
    )
    return (

        <div className="App">
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
