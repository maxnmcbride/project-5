import NewGameForm from "./NewGameForm";
import { Link } from "react-router-dom";

function GameFormPage({ gameData, setGameData }) {
    return (
        <div id="gameformpage">
            <ul>
                <li><Link to="/videogames">Video Games</Link></li>
            </ul>
            <NewGameForm gameData={gameData} setGameData={setGameData} />
        </div>
    );
}

export default GameFormPage;