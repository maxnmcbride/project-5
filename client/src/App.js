import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Homepage from "./Components/Homepage";
import Userpage from "./Components/Userpage";
import VideoGamePage from "./Components/VideoGamePage";
import GameFormPage from './Components/GameFormPage';

function App() {

  const [user, setUser] = useState(false);

  console.log(user)

  function addGameToFavorites (favorite){
    const copyOfUser = {...user}
    copyOfUser.games = [...user.games, favorite.game]
    setUser(copyOfUser)
  }

  function removeGameFromFavorites (doomedGameID){
    console.log('Ready to remove game with ID of', doomedGameID)
    // const copyOfUser = {...user}
    // copyOfUser.games = [...user.games, doomedGameID.game]
    // setUser(copyOfUser)
  }

  useEffect(() => {
    fetch("/currentuser")
      .then((response) => {
         if (response.ok){
            response.json().then((user) => setUser(user))
         }
      });
  }, []);

  const [gameData, setGameData] = useState([])

  useEffect(() => {
      fetch('/games')
          .then((response) => response.json())
          .then(setGameData)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/" element={<Homepage setUser={setUser} />}></Route>
        <Route path="/userpage" element={<Userpage removeGameFromFavorites={removeGameFromFavorites}  user={user} setUser={setUser} />}/>
        <Route path="/videogames" element={<VideoGamePage addGameToFavorites={addGameToFavorites} gameData={gameData} setGameData={setGameData} user={user}/>}/>
        <Route path="/newgameform" element={<GameFormPage setGameData={setGameData}/>}/>
      </Routes>
    </>
  );
}

export default App;
