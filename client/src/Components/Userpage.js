import { Link, useNavigate } from "react-router-dom";
import MyGameLibrary from "./MyGameLibrary";

function Userpage({ user, setUser, removeGameFromFavorites }) {

    const userAsync = user && <h1 id="userpage_heading">WELCOME, {user.username.toUpperCase()}!</h1>

    const navigate = useNavigate();
    const handleLogOut = () => {
        fetch("/logout", { method: 'DELETE' })
        setUser(false)
        navigate("/")
    }

    return (
        <div id="userpage">
            <nav id="userpage_nav">
                <ul id="userpage_ul_nav">
                    <button className="ui button" onClick={handleLogOut}>Log Out</button>
                    <button className="ui button"><Link to="/edituser">Edit My Profile</Link></button>
                    <button className="ui button"><Link to="/videogames">Video Games</Link></button>
                </ul>
            </nav>
            <div id="userpage-fg-container">
                <div id="userpage-fg">
                    {userAsync}
                    <div id="userpage-card">
                        <MyGameLibrary user={user} removeGameFromFavorites={removeGameFromFavorites} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userpage;