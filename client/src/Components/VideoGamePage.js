import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import VideoGameCard from "./VideoGameCard";
import VideoGameModal from "./VideoGameModal";

function VideoGamePage() {

    const[gameData, setGameData] = useState({})

useEffect(()=>{
    fetch('/games')
    .then((response) => response.json())
    .then(setGameData)
}, []) 

// console.log(gameData)

const gameArrayMapped = game.map((gameObj)=> <VideoGameCard game={gameObj}/>)


    return ( 
        <>
        <h1>We're on the Video Game Page</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/userpage">User Page</Link></li>
            </ul>
        </nav>
        <div>
            <VideoGameModal gameData={gameData}/>
        </div>
    </>
     );
}

export default VideoGamePage;