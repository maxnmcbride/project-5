import { Link, useNavigate } from "react-router-dom";
import MyGameLibrary from "./MyGameLibrary";
import {Button} from "semantic-ui-react"

function Userpage({ user, setUser }) {

    const navigate = useNavigate();
    const handleLogOut = () => {
        fetch("/logout", { method: 'DELETE' })
        setUser(false)
        navigate("/")
    }

    return (
        <div>
            <nav>
                <ul>
                    <Button onClick={handleLogOut}>Log Out</Button>
                    <Button><Link to="/videogames">Video Games</Link></Button>
                </ul>
            </nav>
            <h1>We're on the User Page</h1>
            <div>
                <MyGameLibrary user={user} />
            </div>
        </div>
    );
}

export default Userpage;