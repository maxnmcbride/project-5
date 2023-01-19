function GameCardLibrary({ gameData, user }) {

    function removeFromMyLibrary() {
        fetch(`/user_games/${gameData.id}`, { method: "DELETE" });
    }

    return (
        <div className="card">
            <div className="ui card">
                <div className="image">
                    <img src={gameData.image_url} alt={gameData.title} />
                </div>
                <div className="content">
                    <p className="header">{gameData.title}</p>
                    <button className="ui button" onClick={removeFromMyLibrary}>- Remove From My Library</button>
                </div>
            </div>
        </div>
    )
}

export default GameCardLibrary;