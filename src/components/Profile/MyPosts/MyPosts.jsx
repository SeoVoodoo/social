import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props) => {
    
    const newPostElement = React.createRef();
    
    const addPost = () => {
        debugger;
        const text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    const postsElements = props.posts
        .map( (post) => <Post message={post.message} likeCount={post.likeCount} />);
  
    
    return (
        <div className={s.postsBlock}>            
            
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>                
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>                
            </div>        
            <div className={s.posts}>
                { postsElements }              
            </div>                       
        </div>
    );
};

