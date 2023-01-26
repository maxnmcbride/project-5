import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react"
import { useState } from "react";

function UserEditForm({ user, setUser }) {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log('submit button active')
        e.preventDefault()
        fetch(`/users/${user.id}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username
                })
            })
            .then(r => r.json())
            .then((user) => {
                setUser(user)
                alert("You successfully updated your username!")
                navigate("/userpage")
            });
    }

    return (
        <div id="editUserpage">
            <nav id="signup_nav">
                <ul id="signup_ul_nav">
                    <button className="ui button"><Link to="/userpage">User Page</Link></button>
                </ul>
            </nav>
            <h1 id="edit_userpage_header">Update User Preferences</h1>
            <div id="edit_user_container">
                <label htmlFor="username" id="username_update_header"> Username: </label>
                <Form id="edit-userpage-form" onSubmit={handleSubmit} >
                    <Form.Field>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            placeholder="Please Enter Your Preferred Username"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }} />
                    </Form.Field>
                    <button className="ui button" type="submit">Update Preferences</button>
                </Form>
            </div>
        </div>
    );
}

export default UserEditForm;