import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3> My posts </h3>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    new post
                    {postsElements}
                </div>
            </div>

        </div>
    )
}

let AddNewPostForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux =reduxForm({form: "ProfileAddNewPosForm"})(AddNewPostForm);


export default MyPosts;