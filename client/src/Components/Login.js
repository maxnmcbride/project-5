import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from 'semantic-ui-react'

function Login({ setUser }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
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
            <div>
                <Form id="login" onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <Form.Field>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </Form.Field>
                    </label>
                    <label>
                        Password:
                        <Form.Field>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </Form.Field>
                    </label>
                    <Button type="submit">Log In</Button>
                </Form>
            </div>
    );
}

export default Login;