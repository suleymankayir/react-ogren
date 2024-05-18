/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUserById = async (userId) => {
    const deletedUser = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedUser.data);
  };

  useEffect(() => {
    // GET
    // getAllUsers();
    // getUserById(2);

    // ADD
    //   const newUser = {
    //     "username" : "bilal",
    //     "password" : "2145sad"
    //   }
    //   createUser(newUser)

    // UPDATE
    // updateUser("8658",{
    //   "username": "ahmet",
    //   "password" : "9876123"
    // })

    // DELETE
    // deleteUserById("7185");
  }, []);

  return <div></div>;
}

export default App;
