import NewGameForm from "./NewGameForm";
import { Link } from "react-router-dom";

function GameFormPage() {
    return (
        <div id="gameformpage">
            <ul>
                <li><Link to="/videogames">Video Games</Link></li>
            </ul>
            <NewGameForm />
        </div>
    );
}

export default GameFormPage;