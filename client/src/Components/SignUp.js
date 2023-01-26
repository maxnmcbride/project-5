import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react"

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
            <nav id="signup_nav">
                <ul id="signup_ul_nav">
                    <button className="ui button"><Link to="/">Home</Link></button>
                </ul>
            </nav>
            <div>
                <Form onSubmit={handleSubmit} id="signupform">
                    <Form.Field>
                        <label id="signup_form" htmlFor="username">
                            Username:
                            <input
                                type="text"
                                id="username"
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </label>
                    </Form.Field>
                    <Form.Field>
                        <label id="signup_form" htmlFor="password">
                            Password:
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="off" />
                        </label>
                    </Form.Field>
                    <Form.Field>
                        <label id="signup_form" htmlFor="password">
                            Confirm Password:
                            <input
                                type="password"
                                id="password_confirmation"
                                value={password_confirmation}
                                onChange={(e) => setPassword_confirmation(e.target.value)}
                                autoComplete="off" />
                        </label>
                    </Form.Field>
                    <Form.Field>
                        <label id="signup_form" htmlFor="email">
                            Email:
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="off" />
                        </label>
                    </Form.Field>
                    <Button type="submit">Sign Up</Button>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;