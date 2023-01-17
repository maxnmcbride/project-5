function GameCard({ gameData }) {

    return (
        <div className="card">
            <div className="ui card">
                <div className="image">
                    <img src={gameData.image_url} />
                </div>
                <div className="content">
                    <p className="header">{gameData.title}</p>
                </div>
            </div>
        </div>
    )
}

export default GameCard;