import NewGameForm from "./NewGameForm";
import { Link } from "react-router-dom";

function GameFormPage({ gameData, setGameData }) {
    return (
        <div id="gameformpage">
            <nav id="newgame_nav">
                <ul id="newgame_ul_nav">
                    <button className="ui button"><Link to="/userpage">My Profile</Link></button>
                    <button className="ui button"><Link to="/videogames">Video Games</Link></button>
                </ul>
            </nav>
            <NewGameForm gameData={gameData} setGameData={setGameData} />
        </div>
    );
}

export default GameFormPage;