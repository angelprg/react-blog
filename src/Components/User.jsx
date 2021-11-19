import React from 'react'
import Posts from './Posts'

const User = ({id, name, username, email, website}) => {

  const userStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    boxShadow: '4px 4px 20px #555',
    backgroundColor: '#FFF',
    margin: '20px',
  }

  // console.log('imprimiendo card')

  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <h4>{username}</h4>
      <div>
        <p>{email}</p>
        <p>{website}</p>
      </div>
      {/* <Posts userId={id} /> */}
    </div>
  )
}

export default User
