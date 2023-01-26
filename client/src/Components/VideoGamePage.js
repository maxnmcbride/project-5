import { Link } from "react-router-dom";
import GameCard from "./GameCard";

function VideoGamePage({user, gameData = [], addGameToFavorites}) {
    // gameData = []
   
    const GameArrayMappedForCards = gameData.map((gameObj) => <GameCard  addGameToFavorites={addGameToFavorites} user={user} key={gameObj.id} gameData={gameObj}/>)
    
    return (
        <div id="videogamepagebg">
            <nav id="gamepage_nav">
                <ul id="gamepage_ul_nav">
                    <button className="ui button"><Link to="/userpage">My Profile</Link></button>
                    <button className="ui button"><Link to="/newgameform">Add New Game</Link></button>
                </ul>
            </nav>
            <div>
            <h1 id="game_catalog">Game Catalog</h1>
                <div className="card_container">
                    {GameArrayMappedForCards}
                </div>
            </div>
        </div>
    );
}

export default VideoGamePage;