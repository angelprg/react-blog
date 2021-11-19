import React, { useEffect, useState } from "react";
import User from "./User";

const endpoint = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    console.log("obteniendo datos de internet");
    fetch(endpoint).then((res) => {
      res.json().then((data) => {
        setUsers(data);
      });
    });
  }, [buscar]);

  // console.log("renderizando componente");
  // console.log("buscar: ", buscar);

  const usersStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  return (
    <div>
      <input
        type="text"
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
      />
      <div style={usersStyle}>
        {users
          .filter((user) => user.website.includes(".info"))
          .map(({ id, name, username, email, website }) => (
            <User
              key={id}
              id={id}
              name={name}
              username={username}
              email={email}
              website={website}
            />
          ))}
      </div>
    </div>
  );
};

export default Users;
