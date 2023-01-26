function GameCardLibrary({ gameData, removeGameFromFavorites }) {

    const removeFromMyLibrary = () => {
        fetch(`/user_games/${gameData.id}`, { method: "DELETE" })
        removeGameFromFavorites(gameData.id);
    }

    return (
        <div>
            <div className="card">
                <div className="ui card">
                    <div className="image">
                        <img src={gameData.image_url} alt={gameData.title} />
                    </div>
                    <div className="content">
                        <button className="ui button" onClick={removeFromMyLibrary}>- Remove From My Library</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCardLibrary;