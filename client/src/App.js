import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Homepage from "./Components/Homepage";
import Userpage from "./Components/Userpage";
import VideoGamePage from "./Components/VideoGamePage";


function App() {

  const [user, setUser] = useState(false);

  console.log(user)

  useEffect(() => {
    fetch("/currentuser")
      .then((response) => {
         if (response.ok){
            response.json().then((user) => setUser(user))
         }
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/" element={<Homepage setUser={setUser} />}></Route>
        <Route path="/userpage" element={<Userpage/>}/>
        <Route path="/videogames" element={<VideoGamePage/>}/>
      </Routes>
    </>
  );
}

export default App;
