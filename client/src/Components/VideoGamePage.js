import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoGameCard from "./VideoGameCard";

function VideoGamePage() {

    const [gameData, setGameData] = useState([])

    useEffect(() => {
        fetch('/games')
            .then((response) => response.json())
            .then(setGameData)
    }, [])

    console.log(gameData)

    const GameArrayMapped = gameData.map((gameObj) => <VideoGameCard key={gameObj.id} gameData={gameObj} />)

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
                {GameArrayMapped}
            </div>
        </>
    );
}

export default VideoGamePage;