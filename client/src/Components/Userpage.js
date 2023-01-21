import { Link, useNavigate } from "react-router-dom";
import {Button} from "semantic-ui-react"
import MyGameLibrary from "./MyGameLibrary";

function Userpage({ user, setUser, removeGameFromFavorites }) {

    const navigate = useNavigate();
    const handleLogOut = () => {
        fetch("/logout", { method: 'DELETE' })
        setUser(false)
        navigate("/")
    }

    return (
        <div id="userpage">
            <nav>
                <ul>
                    <Button onClick={handleLogOut}>Log Out</Button>
                    <Button><Link to="/videogames">Video Games</Link></Button>
                </ul>
            </nav>
            <h1 className="userpage_text">We're On {user.username}'s  User Page</h1>
            <Button><Link to="/edituser">Edit My Profile</Link></Button>
            <div>
                <MyGameLibrary user={user} removeGameFromFavorites={removeGameFromFavorites}/>
            </div>
        </div>
    );
}

export default Userpage;