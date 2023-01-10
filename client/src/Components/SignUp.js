import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/userpage">User Page</Link></li>
                    <li><Link to="/videogames">Video Games</Link></li>
                </ul>
            </nav>
            <h1>We're on the Sign Up Page</h1>
            <div>
                <form>
                    <label>
                        Username:
                        <input type="text" value={""} onChange={""}/>
                    </label>
                    <label>
                        Password:
                        <input type="text" value={""} onChange={""}/>
                    </label>
                    <label>
                        Confirm Password:
                        <input type="text" value={""} onChange={""}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" value={""} onChange={""}/>
                    </label>
                    <button>Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default SignUp;