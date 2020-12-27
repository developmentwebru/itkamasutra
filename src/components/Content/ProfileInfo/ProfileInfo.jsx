import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
           {/* <div>
                <img
                    src="https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg"
                    alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large}  />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;