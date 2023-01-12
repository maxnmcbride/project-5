import { Link } from "react-router-dom";
import Login from "./Login";

function Homepage({ setUser }) {
    return (
        <div id="homepage">
            <nav>
                <ul>
                    <li><Link to="/userpage">User Page</Link></li>
                    <li><Link to="/videogames">Video Games</Link></li>
                </ul>
            </nav>
            <div>
            </div>
            <div>
                <Login setUser={setUser} />
                <button><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>
    );
}

export default Homepage;