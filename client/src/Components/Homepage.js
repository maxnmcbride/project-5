import { Link } from "react-router-dom";

function Homepage() {
    return (
        <>
            <nav>
                <ul>
                    {/* <li><Link to="/signup">Sign Up</Link></li> */}
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/userpage">User Page</Link></li>
                    <li><Link to="/videogames">Video Games</Link></li>
                </ul>
            </nav>
            <h1>Home Page</h1>
            <button><Link to="/signup">Sign Up</Link></button>
        </>
    );
}

export default Homepage;