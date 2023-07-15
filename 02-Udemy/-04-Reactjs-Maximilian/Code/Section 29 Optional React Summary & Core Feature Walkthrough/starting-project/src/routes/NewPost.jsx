import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

function NewPost(props) {
const [enteredBody, setEnteredBody] = useState("");
const [enteredAuthor, setEnteredAuthor] = useState("");

const bodyChangeHandler = (e) => {
  setEnteredBody(e.target.value);
};
const authorChangeHandler = (e) => {
  setEnteredAuthor(e.target.value);
};
const [enteredTxt, setenteredTxt] = useState('')
  function changeBodyHandler(e){
    setenteredTxt(e.target.value);
  }

  function submitHandler(e){
    e.preventDefault()
    const postData = {
      body: enteredBody,
      author: enteredAuthor
      
    }
   props.onCancel()
  props.onAddPost(postData)
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p>{enteredTxt.length}</p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type='button' onClick={props.onAddPost}>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
