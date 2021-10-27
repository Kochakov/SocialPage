import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  
  return (
    
    <div>
      <div className={s.descriptionBlock}>
      <img src={profile.photos.large}/>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>AboutMe: {profile.aboutMe}</div>
        <div>Facebook: {profile.contacts.facebook}</div>
        <div>VK: {profile.contacts.vk}</div>
        <div>Twitter: {profile.contacts.twitter}</div>
        <div>GitHub: {profile.contacts.github}</div>
        <div>FullName: {profile.fullName}</div>  
      </div>
    </div>
  )
}

export default ProfileInfo;