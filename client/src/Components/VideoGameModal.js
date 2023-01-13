
function VideoGameModal({ gameData }) {

    const mappedGameData = gameData.map((gameObj) => {

        return (
            <div>
                <h1>Title:{gameObj.title}</h1>
            </div>
        )
    })

    // developer, game_description, genre, id, image_url, multiplayer (boolean)
    // platform, release_date, theme, title

    return (
        <div>
            {mappedGameData}
        </div>
    );
}

export default VideoGameModal;