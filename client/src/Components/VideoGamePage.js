import { Link } from "react-router-dom";

function VideoGamePage() {
    return ( 
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/userpage">User Page</Link></li>
            </ul>
        </nav>
        <h1>We're on the Video Game Page</h1>
    </>
     );
}

export default VideoGamePage;