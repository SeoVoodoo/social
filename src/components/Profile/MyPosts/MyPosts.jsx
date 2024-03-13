import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props) => {
    
    return (
        <div>            
            
            My posts
            <div>
                <textarea> </textarea>
                <button>Add Post</button>
            </div>        

            <Post message = "Hi, how are you ?" likeCount={15} />
            <Post message = "It's my first post" likeCount={20} />            
        </div>
    );
};

