import React from 'react'

const Post = ({title, body}) => {

  const userStyle = {
    borderTop: '1px solid gray',
    // borderRadius: '10px',
    // boxShadow: '4px 4px 20px #555',
    // backgroundColor: '#FFF',
    // margin: '20px',
  }

  return (
    <div style={userStyle} >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Post
