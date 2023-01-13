function VideoGameCard({ gameData }) {

    console.log("videogamecard:", gameData)

    // developer, game_description, genre, id, image_url, multiplayer (boolean)
    // platform, release_date, theme, title

    return (
        <div>
            <img src={gameData.image_url}/>
            <h2>Title: {gameData.title}</h2>
            <h3>Genre: {gameData.genre}</h3>
            <h3>Description: {gameData.game_description}</h3>
            <h3>Multiplayer: {gameData.multiplayer}</h3>
        </div>
    );
}

export default VideoGameCard;