import React from 'react';
import c from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Content = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}

export default Content;