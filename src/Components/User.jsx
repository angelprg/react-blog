import React from 'react'

const User = ({name, username, email, website}) => {

  const userStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    boxShadow: '4px 4px 20px #555',
    backgroundColor: '#FFF',
    width: '350px',
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
      
    </div>
  )
}

export default User
