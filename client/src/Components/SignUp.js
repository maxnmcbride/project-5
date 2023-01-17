import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation,
                email
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    setUser(user)
                    navigate("/userpage")
                });
            } else {
                response.json().then()
                // NEED TO ADD ERROR HANDLING 
            }
        });
    }

    return (
        <div id="signuppage">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/userpage">User Page</Link></li>
                    <li><Link to="/videogames">Video Games</Link></li>
                </ul>
            </nav>
            <h1>We're on the Sign Up Page</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label className="signup_form" htmlFor="username">
                        Username:
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className="signup_form" htmlFor="password">
                        Password:
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off" />
                    </label>
                    <label className="signup_form" htmlFor="password">
                        Confirm Password:
                        <input
                            type="password"
                            id="password_confirmation"
                            value={password_confirmation}
                            onChange={(e) => setPassword_confirmation(e.target.value)}
                            autoComplete="off" />
                    </label>
                    <label className="signup_form" htmlFor="email">
                        Email:
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off" />
                    </label>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;