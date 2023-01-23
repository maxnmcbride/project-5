import { Link, useNavigate } from "react-router-dom";
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
                    <button className="ui button" onClick={handleLogOut}>Log Out</button>
                    <button className="ui button"><Link to="/videogames">Video Games</Link></button>
                </ul>
            </nav>
            <h1 className="userpage_text">We're On {user.username}'s  User Page</h1>
            <button className="ui button"><Link to="/edituser">Edit My Profile</Link></button>
            <div>
                <MyGameLibrary user={user} removeGameFromFavorites={removeGameFromFavorites} />
            </div>
        </div>
    );
}

export default Userpage;