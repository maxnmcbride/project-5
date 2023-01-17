
function VideoGameModal({ gameData }) {

    return (
        <div>
            {/* <> <h3>Title:</h3> <p> {gameData.title}</p> </>
            <> <h3>Genre:</h3> <p> {gameData.genre}</p> </>
            <> <h3>Theme:</h3> <p> {gameData.theme}</p> </>
            <> <h3>Description:</h3> <p> {gameData.game_description} </p> </>
            <> <h3>Multiplayer:</h3> <p>{gameData.multiplayer ? "True" : "False"}</p> </>
            <> <h3>Platform:</h3> <p>{gameData.platform} </p> </>
            <> <h3>Release Date:</h3> <p> {gameData.release_date} </p> </> */}
            <div class="ui modal">
                <i class="close icon"></i>
                <div class="header">
                    Profile Picture
                </div>
                <div class="actions">
                    <div class="ui black deny button">
                        Nope
                    </div>
                    <div class="ui positive right labeled icon button">
                        Yep, that's me
                        <i class="checkmark icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default VideoGameModal;