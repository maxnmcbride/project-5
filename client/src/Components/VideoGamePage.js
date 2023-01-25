import { Link } from "react-router-dom";
import GameCard from "./GameCard";

function VideoGamePage({user, gameData, addGameToFavorites}) {
    // gameData = []
   
    const GameArrayMappedForCards = gameData.map((gameObj) => <GameCard  addGameToFavorites={addGameToFavorites} user={user} key={gameObj.id} gameData={gameObj}/>)
    
    return (
        <div id="videogamepagebg">
            <nav id="signup_nav">
                <ul id="signup_ul_nav">
                    <button className="ui button"><Link to="/userpage">User Page</Link></button>
                    <button className="ui button"><Link to="/newgameform">Add New Game</Link></button>
                </ul>
            </nav>
            <h1 id="signup_header">We're on the Video Game Page</h1>
            <div>
                <div className="card_container">
                    {GameArrayMappedForCards}
                </div>
            </div>
        </div>
    );
}

export default VideoGamePage;