import { Modal } from "semantic-ui-react";

function VideoGameModal({ gameData }) {

    console.log('made it to the modal')

    return (
        <div>
            {/* <> <h3>Title:</h3> <p> {gameData.title}</p> </>
            <> <h3>Genre:</h3> <p> {gameData.genre}</p> </>
            <> <h3>Theme:</h3> <p> {gameData.theme}</p> </>
            <> <h3>Description:</h3> <p> {gameData.game_description} </p> </>
            <> <h3>Multiplayer:</h3> <p>{gameData.multiplayer ? "True" : "False"}</p> </>
            <> <h3>Platform:</h3> <p>{gameData.platform} </p> </>
            <> <h3>Release Date:</h3> <p> {gameData.release_date} </p> </> */}
            <div class="ui basic modal">
                <div class="ui icon header">
                    <i class="archive icon"></i>
                    Archive Old Messages
                </div>
                <div class="content">
                    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                </div>
                <div class="actions">
                    <div class="ui red basic cancel inverted button">
                        <i class="remove icon"></i>
                        No
                    </div>
                    <div class="ui green ok inverted button">
                        <i class="checkmark icon"></i>
                        Yes
                    </div>
                </div>
            </div>
        </div>
    );
}


export default VideoGameModal;