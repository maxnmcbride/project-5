import Login from "./Login";

function Homepage({ setUser }) {
    return (
        <div id="homepage">
            <div id="homepage-fg">
            </div>
            <div id="homepage_login">
                <Login setUser={setUser} />
            </div>
        </div>
    );
}

export default Homepage;