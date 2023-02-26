import React from 'react';
import './styles.css';
import "./responsive.css"

import userPicture from "./../../images/pictures/vitor-fraga.png"

function UserCard() {
  return (
    <div className='card-user'>
      <img className="user-image" src={userPicture} alt="Vitor Fraga Foto" />
      <span className='user-name'>Vitor Fraga</span>
    </div>
  )
}

export default UserCard;