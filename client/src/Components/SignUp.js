import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");

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
                password_confirmation: passwordConfirmation,
                email,
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => console.log(user));
            }
        });
    }



    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/login">Log In</Link></li> */}
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
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
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
        </>
    );
}

export default SignUp;