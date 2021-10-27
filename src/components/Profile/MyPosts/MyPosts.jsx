import React from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form'
import {maxLengthCreator, required} from "../../../Utils/Validators/validators"
import { Textarea } from '../../Common/Preloader/FormsControls/FormsControls';



const MyPosts = (props) => {


  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount} />)

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder={"Post message"} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;