import { Link } from "react-router-dom";

function Userpage() {
    return (
        <>
            <h1>We're on the User Page</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/videogames">Video Games</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Userpage;