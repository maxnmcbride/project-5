import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Homepage from "./Components/Homepage";
import Userpage from "./Components/Userpage";
import VideoGamePage from "./Components/VideoGamePage";
import GameFormPage from './Components/GameFormPage';
import UserEditForm from './Components/UserEditForm';

function App() {

  const [user, setUser] = useState(false);

  console.log(user)

  function addGameToFavorites(favorite) {
    const copyOfUser = { ...user }
    copyOfUser.games = [...user.games, favorite.game]
    setUser(copyOfUser)
  }

  function removeGameFromFavorites(doomedGameID) {
    // doomedGameID is being passed in the game card library, this could have been called anything
    // this is inverse data flow
    console.log('Ready to remove game with ID of', doomedGameID)
    const copyOfUser = { ...user }
    copyOfUser.games = copyOfUser.games.filter((gameObj) => {
      return gameObj.id !== doomedGameID
    })
    setUser(copyOfUser)
    // filter takes callback function as argument
    // this will pass the whole game as the argument
  }

  useEffect(() => {
    fetch("/currentuser")
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user))
        }
      });
  }, []);

  const [gameData, setGameData] = useState([])
  // if rerender stops working use a rerender state passed in array

  useEffect(() => {
    fetch('/games')
      .then((response) => response.json())
      .then(setGameData)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/" element={<Homepage setUser={setUser} />}></Route>
        <Route path="/userpage" element={<Userpage removeGameFromFavorites={removeGameFromFavorites} user={user} setUser={setUser} />} />
        <Route path="/videogames" element={<VideoGamePage addGameToFavorites={addGameToFavorites} gameData={gameData} setGameData={setGameData} user={user} />} />
        <Route path="/newgameform" element={<GameFormPage gameData={gameData} setGameData={setGameData} />} />
        <Route path="/edituser" element={<UserEditForm user={user} setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
