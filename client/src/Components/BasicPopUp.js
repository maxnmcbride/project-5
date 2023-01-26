import { useState } from "react";

function BasicPopUp({ setBasicPopUp, gameData, addToMyLibrary }) {

    const closePopUp = () => {
        setBasicPopUp(false)
    };

    return (
        <div id="overlay" onClick={closePopUp}>
            <div id='popup-container'>
                <div id='content-container'>
                    <h1>{gameData.title}</h1>
                    <h3>Description:</h3>
                    <p>{gameData.game_description}</p>
                    <h3>Platform(s):</h3>
                    <p>{gameData.platform}</p>
                    <h3>Genre(s):</h3>
                    <p>{gameData.genre}</p>
                    <h3>Theme(s):</h3>
                    <p>{gameData.theme}</p>
                    <h3>Multiplayer:</h3>
                    <p>{gameData.multiplayer}</p>
                    <h3>Developer:</h3>
                    <p>{gameData.developer}</p>
                    <h3>Release Date:</h3>
                    <p>{gameData.release_date}</p>
                    <button onClick={closePopUp} className="ui button">Close</button>
                    <button onClick={addToMyLibrary} className="ui button">+ Add To My Library</button>
                </div>
            </div>
        </div>
    );
}

export default BasicPopUp;