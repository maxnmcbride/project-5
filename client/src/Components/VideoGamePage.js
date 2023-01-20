import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import {Button} from "semantic-ui-react";

function VideoGamePage({user, gameData, addGameToFavorites}) {
   
    const GameArrayMappedForCards = gameData.map((gameObj) => <GameCard  addGameToFavorites={addGameToFavorites} user={user} key={gameObj.id} gameData={gameObj} />)
    
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