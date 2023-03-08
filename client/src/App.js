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
  const [rerender, setRerender] = useState([]);
  // this is not scalable as whenmultiple users are on app
  // if everyone is making updates it will continually rerender
  // and slow it down because it needs significantly more information

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
    .then(response => {
      if (response.ok){
        response.json()
        .then(setGameData)
      }
    })
  }, [rerender])
  // this is in the dependency array because when someone updates the games list we want the game
  // list to rerender and show all new games...

  // the dependency array is signifying to the fetch that it should rerender when
  // a change is made to a specific component
  // in this case [gameData]
  // if someone adds a game or updates a games etc. the fetch knows to rerender

      // .then((response) => response.json())
    //   .then((data)=>{setGameData(data)})
    // }, [])

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/" element={<Homepage setUser={setUser} />}></Route>
        <Route path="/userpage" element={<Userpage removeGameFromFavorites={removeGameFromFavorites} user={user} setUser={setUser} />} />
        <Route path="/videogames" element={<VideoGamePage addGameToFavorites={addGameToFavorites} gameData={gameData} setGameData={setGameData} user={user} />} />
        <Route path="/newgameform" element={<GameFormPage gameData={gameData} setGameData={setGameData} setRerender={setRerender}/>} />
        <Route path="/edituser" element={<UserEditForm user={user} setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
