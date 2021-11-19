import React, { useEffect, useState } from "react";
import Post from './Post';

// const endpoint = `https://jsonplaceholder.typicode.com/posts`;

const Posts = ({userId}) => {

  const endpoint = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
  
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      console.log('obteniendo datos de internet')
      fetch(endpoint).then((res) => {
        res.json().then((data) => {
          setPosts(data);
        });
      });
    },
    []
  );

  console.log('renderizando componente')

  const usersStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div style={usersStyle}>
      {posts.map(({ id, title, body }) => (
        <Post
          key={id}
          title={title}
          body={body}
        />
      ))}
    </div>
  );
};

export default Posts;
