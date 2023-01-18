import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import {Button} from "semantic-ui-react";

function VideoGamePage({user}) {

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
   
    const GameArrayMappedForCards = gameData.map((gameObj) => <GameCard user={user} key={gameObj.id} gameData={gameObj} />)


    
    return (
        <>
            <nav>
                <ul>
                    <Button><Link to="/">Home</Link></Button>
                    <Button><Link to="/userpage">User Page</Link></Button>
                    <Button><Link to="/newgameform">Add New Game</Link></Button>
                </ul>
            </nav>
            <h1>We're on the Video Game Page</h1>
            <div>
                <div>
                    {GameArrayMappedForCards}
                </div>
            </div>
        </>
    );
}

export default VideoGamePage;