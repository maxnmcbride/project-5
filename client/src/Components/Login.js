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
            <div>
                <h1>We're on the Login Page</h1>
            </div>
            <div>
                <form>
                    <label>
                        Username:
                        <input type="text" value={""} onChange={""}/>
                        {/* the value is going to be set to the state, so for this it will be username */}
                    </label>
                    <label>
                        Password:
                        <input type="text" value={""} onChange={""}/>
                    </label>
                    <button>Log In</button>
                </form>
            </div>
        </>
    );
}

export default Login;