import { Link } from "react-router-dom";
import Login from "./Login";

function Homepage({setUser}) {
    return (
        <div className="homepage">
            <nav>
                <ul>
                    {/* <li><Link to="/signup">Sign Up</Link></li> */}
                    {/* <li><Link to="/login">Log In</Link></li> */}
                    <li><Link to="/userpage">User Page</Link></li>
                    <li><Link to="/videogames">Video Games</Link></li>
                </ul>
            </nav>
            <div>
            <h1>Home Page</h1>
            </div>
            <div>
                <Login setUser={setUser}/>
            </div>
            <button><Link to="/signup">Sign Up</Link></button>
        </div>
    );
}

export default Homepage;