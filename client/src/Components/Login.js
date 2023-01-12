import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
        <>
            <div id="login">
                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input 
                        type="text" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </>
    );
}

export default Login;