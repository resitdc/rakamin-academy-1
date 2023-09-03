import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`)
      setUserData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, [id])

  return (
    <div>
      {
        userData ? (
          <div>
            <h1> {userData.first_name} </h1>
            <p> {userData.email} </p>
          </div>
        )
          : <p>LOADING....</p>
      }
    </div>
  );
};

export default Home;