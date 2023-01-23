import BasicPopUp from "./BasicPopUp";
import { useState } from "react";

function GameCard({ gameData, addGameToFavorites }) {

    const [basicPopUp, setBasicPopUp] = useState(false)

    const openModal = () => {
        setBasicPopUp(true)
    };

    function addToMyLibrary() {
        fetch("/user_games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                game_id: gameData.id
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then(addGameToFavorites);
            } else {
                console.log('oh boy')
                // add error handling here!
            }
        });
    }

    return (
        <div>
            <div id="modal_on_page">
            {basicPopUp ? <BasicPopUp basicPopUp={basicPopUp} setBasicPopUp={setBasicPopUp} gameData={gameData} addToMyLibrary={addToMyLibrary} /> : null}
            </div>
            <div className="card">
                <div className="ui card">
                    <div onClick={openModal} className="image">
                        <img src={gameData.image_url} alt={gameData.title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;