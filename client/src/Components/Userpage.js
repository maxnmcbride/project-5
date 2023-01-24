import { Link, useNavigate } from "react-router-dom";
import MyGameLibrary from "./MyGameLibrary";

function Userpage({ user, setUser, removeGameFromFavorites }) {

    const userAsync = user && <h1>WELCOME, {user.username.toUpperCase()}</h1>
    // const libraryMessage = (user.games.length === 1) ? <h2>There is 1 game in your library</h2> : <h2>There are {user.games.length} games in your library</h2>

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
            <div id="userpage-fg-container">
                <div id="userpage-fg">
                    {userAsync}
                    <button className="ui button"><Link to="/edituser">Edit My Profile</Link></button>
                    <div id="userpage-card">
                        <MyGameLibrary user={user} removeGameFromFavorites={removeGameFromFavorites} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userpage;