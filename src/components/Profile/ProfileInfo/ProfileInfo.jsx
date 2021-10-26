import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    
    <div>
      {/* <div>
        <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' className={s.image} />
      </div> */}
      <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large}/>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <div>AboutMe: {props.profile.aboutMe}</div>
        <div>Facebook: {props.profile.contacts.facebook}</div>
        <div>VK: {props.profile.contacts.vk}</div>
        <div>Twitter: {props.profile.contacts.twitter}</div>
        <div>GitHub: {props.profile.contacts.github}</div>
        <div>FullName: {props.profile.fullName}</div>  
      </div>
    </div>
  )
}

export default ProfileInfo;