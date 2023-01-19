import { useState } from "react"

function GameCard({ gameData, user }) {

    const clicked = () => { console.log('clicked') }


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
                response.json().then(console.log('gotta add where this is going to be used in useEffect'));
            } else {
                console.log('oh boy')
                // add error handling here!
            }
        });
    }

    return (
        <div className="card">
            <div className="ui card">
                <div onClick={clicked} className="image">
                    <img src={gameData.image_url} alt={gameData.title} />
                </div>
                <div className="content">
                    <p onClick={clicked} className="header">{gameData.title}</p>
                    <button onClick={addToMyLibrary} className="ui button">+ Add To My Library</button>
                </div>
            </div>
        </div>
    )
}

export default GameCard;