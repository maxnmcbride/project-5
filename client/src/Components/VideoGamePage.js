import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import VideoGameCard from "./VideoGameCard";
import GameCard from "./GameCard";

function VideoGamePage() {

    const [gameData, setGameData] = useState([])

    useEffect(() => {
        fetch('/games')
            .then((response) => response.json())
            .then(setGameData)
    }, [])

    // LEFT OFF HERE TRYING TO HAVE MY NEWLY CREATED GAMES ADDED TO THE GAME ARRAY TO BE DISPLAYED
    // const addNewGameToGamePage = (game) => {
    //     const copyOfDiscussion = { ...discussion, comments: [...discussion.comments, comment] }
    //     setDiscussion(copyOfDiscussion)
    //     // console.log("totally ready to add this comment to discussion", comment )
    // }

    // const GameArrayMapped = gameData.map((gameObj) => <VideoGameCard key={gameObj.id} gameData={gameObj} />)
   
    const GameArrayMappedForCards = gameData.map((gameObj) => <GameCard key={gameObj.id} gameData={gameObj} />)
    const clicked = () => {console.log('clicked')}

    return (
        <>
            <h1>We're on the Video Game Page</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/userpage">User Page</Link></li>
                    <li><Link to="/newgameform">Add New Game</Link></li>
                </ul>
            </nav>
            <div>
                <div onClick={clicked} className="game_cards">
                    {GameArrayMappedForCards}
                </div>
            </div>
        </>
    );
}

export default VideoGamePage;