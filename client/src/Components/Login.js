import { Link } from "react-router-dom";

function Login() {
    return ( 
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/userpage">User Page</Link></li>
                <li><Link to="/videogames">Video Games</Link></li>
            </ul>
        </nav>
        <h1>We're on the Login Page</h1>
    </>
     );
}

export default Login;