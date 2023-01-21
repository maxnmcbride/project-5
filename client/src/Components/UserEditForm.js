import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react"
import { useState } from "react";

function UserEditForm({user, setUser}) {

    const [username, setUsername] = useState("");
    const handleSubmit = (e) =>{
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
            .then(setUser)
    }

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/userpage">User Page</Link></li>
                </ul>
            </nav>
            <h1>Welcome! On This Page You Can Update Your Username</h1>
            <div>
                <Form onSubmit = {handleSubmit} >
                    <Form.Field>
                        <label htmlFor="username">
                            Username:
                            <input
                                type="text"
                                id="username"
                                autoComplete="off"
                                placeholder="Please Enter Your Preferred Username"
                                value={username}
                                onChange={(e) => {setUsername(e.target.value)}} />
                        </label>
                    </Form.Field>
                    <Button type="submit">Update Preferences</Button>
                </Form>
            </div>
        </div>
    );
}

export default UserEditForm;