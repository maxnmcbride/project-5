import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Userpage from "./Components/Userpage";
import VideoGamePage from "./Components/VideoGamePage";


function App() {

  const [user, setUser] = useState(false);

  useEffect(() => {
    fetch("/currentuser")
      .then((response) => {if (response.ok){response.json()
      .then((user) => setUser(user))}
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="login" element={<Login/>} />
        <Route path="/" element={<Homepage setUser={setUser} />}></Route>
        <Route path="/userpage" element={<Userpage/>}/>
        <Route path="/videogames" element={<VideoGamePage/>}/>
      </Routes>
    </>
  );
}

export default App;
