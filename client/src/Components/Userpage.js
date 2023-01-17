import { Link } from "react-router-dom";
import MyGameLibrary from "./MyGameLibrary";

function Userpage({user}) {
    return (
        <div>
            <h1>We're on the User Page</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/videogames">Video Games</Link></li>
                </ul>
            </nav>
            <div>
                <MyGameLibrary user={user}/>
            </div>
        </div>
    );
}

export default Userpage;