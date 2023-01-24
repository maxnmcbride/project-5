import { Link } from "react-router-dom";
import Login from "./Login";
import { Button } from "semantic-ui-react"

function Homepage({ setUser }) {
    return (
        <div id="homepage">
            {/* this has the flower wallpaper */}
            <nav>
                <ul>
                    <li><Link to="/userpage">User Page</Link></li>
                    <li><Link to="/videogames">Video Games</Link></li>
                </ul>
            </nav>
            <div id="homepage-fg">
                {/* just the tv GIF */}
            </div>
                <div id="homepage_login">
                    {/* the login form */}
                    <Login setUser={setUser} />
                    <Button id="signUplink"><Link to="/signup">Sign Up</Link></Button>
                </div>
        </div>
    );
}

export default Homepage;