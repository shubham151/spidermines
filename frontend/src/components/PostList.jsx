import Post from './Post';
import classes from '../style/PostList.module.css'
import NewPost from './NewPost';
import { useState, useEffect } from 'react';
import Modal from './Modal';

function PostList(props) {
    const [posts, setPost] = useState([]);
    const [showLoadMask, setLoadMask]  = useState(false);
    useEffect(() => {
        async function getPosts() {
            setLoadMask(true)
            const res = await fetch('http://localhost:8080/posts');
            const resData = await res.json()
            // console.log(resData)
            setPost(resData.posts)
            setLoadMask(false)
        }
        getPosts();
    }, [])

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {   
                'Content-Type': 'application/json'
            }
        });
        setPost((existingPosts) => [postData, ...existingPosts]);
    }


    
    return (
        <div>
            {props.isVisible &&
                <Modal onClose={props.onStopPost}>
            <NewPost onCancel={props.onCancel} onAddPost={addPostHandler}/>
                </Modal>
                
            }
            {
            !showLoadMask && posts.length > 0 &&
            <ul className={classes.posts}>
                { posts.map((post) => <Post author = {post.author} body={post.body}/>)}
            </ul>
            }

            {
                !showLoadMask && posts.length === 0 &&
                <div style={{color:'while'}}> 
                    <h1>There are no Posts yet!</h1>
                    <p>Try adding....</p>
                </div>
            }
            {
                showLoadMask &&
                <div style={{color:'while'}}>
                    <h1>Loading Posts.....</h1>
                    
                </div>

            }
        </div>
    );
}

export default PostList;