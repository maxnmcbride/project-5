function GameCard({ gameData }) {

    return (
        <div className="card">
            <div class="ui card">
                <div class="image">
                    <img src={gameData.image_url} />
                </div>
                <div class="content">
                    <a class="header">{gameData.title}</a>
                </div>
            </div>
        </div>
    )
}

export default GameCard;