import classes from '../style/NewPost.module.css';
import { useState } from 'react';

function NewPost(props) {

  const [enteredBody, setEnteredBody] = useState('');
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }
    const [enteredAuthor, setEnteredAuthor] = useState('');
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    function submitHandler(event){
      event.preventDefault();
      let postData = {
        body: enteredBody,
        author: enteredAuthor
      }
      props.onAddPost(postData);
      props.onCancel()
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler }/>
      </p>
      <p className={classes.actions} >
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Post</button>
      </p>
    </form>
  );
}

export default NewPost;