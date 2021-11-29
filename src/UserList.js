import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function UserList() {
  const [listOfUser, setlistOfUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setlistOfUser(response.data);
    });
  }, []);
  return (
    <div>
      <ul className="List1">
        {listOfUser.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
      <ul className="List1">
        {listOfUser.map((el) => (
          <li>{el.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
