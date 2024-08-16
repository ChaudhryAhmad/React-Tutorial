// data access hota hai is mein

import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}= useContext(UserContext);
  if(!user) return;
  return <div>Welcome {user.username}</div>
}

export default Profile