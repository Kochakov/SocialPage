import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiY6OTRiDi5JSl_ng00hMGFNJ13Gg78jVsw&usqp=CAU" />
      {props.message}
      <div>
        <span>{props.like} Like</span>
      </div>
    </div>


  )
}

export default Post;