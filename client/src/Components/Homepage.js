import { Link } from "react-router-dom";
import Login from "./Login";
import { Button } from "semantic-ui-react"

function Homepage({ setUser }) {
    return (
        <div id="homepage">
            {/* this has the flower wallpaper */}
            <div id="homepage-fg">
                {/* just the tv GIF */}
            </div>
                <div id="homepage_login">
                    {/* the login form */}
                    <Login setUser={setUser} />
                </div>
        </div>
    );
}

export default Homepage;