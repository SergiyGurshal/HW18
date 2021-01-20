import React from 'react'

import likeIcon from '../../img/like.svg'
import commentIcon from '../../img/comment.png'
import repostIcon from '../../img/share.png'

const Post = ({ name, photo, nickname, content, image, date }) => {
  return (
    <div className="post">
      <div className="infoPanel">
        <div className="avatar">
          <img src={photo} alt="Avatar" width="100" height="100" className="avatarImg"></img>
        </div>
        <div className="userInfo">
          <div className="namePanel">{name}</div>
          <div className="nickNamePanel">{nickname}</div>
        </div>
        <div className="datePanel">{date}</div>
      </div>
      <div className="contentPanel">
        <div className="contentDiscription">{content}</div>
        <div className="contentImg">
          <img className="postImg" src={image} alt="ContentImg" />
        </div>
        <div className="likePanel">
          <img src={likeIcon} width="30px" height="30px" alt="like icon" />
          <img src={commentIcon} width="30px" height="30px" alt="comment icon" />
          <img src={repostIcon} width="30px" height="30px" alt="repost icon" />
        </div>
      </div>
    </div>
  )
}

export default Post
