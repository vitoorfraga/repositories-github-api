import React, { useEffect } from 'react';
import './styles.css';
import "./responsive.css"

import userPicture from "./../../images/pictures/vitor-fraga.png"
import axios from 'axios';

function UserCard() {

  const [userData, setUserData] = React.useState([])

  React.useEffect(() => {
    axios.get("https://api.github.com/users/vitoorfraga")
      .then(res => {
        setUserData(res.data)
      })
  }, [])

  return (
    <div className='card-user'>
      <img className="user-image" src={userData.avatar_url} alt="Vitor Fraga Foto" />
      <span className='user-name'>{userData.name}</span>
    </div>
  )
}

export default UserCard;