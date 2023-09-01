import {PostForm} from "./PostForm/PostForm";
import {useState} from "react";
import {Posts} from "./Posts/Posts";

const PostContainer = () => {
    const [posts, setPosts] = useState([])
    return (
        <div>
              <PostForm setPosts={setPosts}/>
              <hr/>
              <Posts posts={posts} setPosts={setPosts}/>
        </div>
    );
};

export {PostContainer};
