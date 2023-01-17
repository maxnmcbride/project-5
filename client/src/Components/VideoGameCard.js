function VideoGameCard({ gameData }) {

    return (
        <div>
                <> <h3>Title:</h3> <p> {gameData.title}</p> </>
                <> <h3>Genre:</h3> <p> {gameData.genre}</p> </>
                <> <h3>Theme:</h3> <p> {gameData.theme}</p> </>
                <> <h3>Description:</h3> <p> {gameData.game_description} </p> </>
                <> <h3>Multiplayer:</h3> <p>{gameData.multiplayer ? "True" : "False" }</p> </>
                <> <h3>Platform:</h3> <p>{gameData.platform} </p> </>
                <> <h3>Release Date:</h3> <p> {gameData.release_date} </p> </>
        </div>
    );
}

export default VideoGameCard;



// developer, game_description, genre, id, image_url, multiplayer (boolean)
// platform, release_date, theme, title