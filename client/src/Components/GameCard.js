import { useState } from "react"

function GameCard({ gameData, user }) {

    const clicked = () => { console.log('clicked') }
    const clicked2 = () => { console.log('button') }
    // console.log(gameData)

    const[game_id, setGameId] = useState("")

    // need to bring in user from App

    //   function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("/user_games", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             game_id
    //         }),
    //     }).then((response) => {
    //         if (response.ok) {
    //             response.json().then(console.log('gotta add where this is going to be used in useEffect'));
    //         } else {
    //             console.log('oh boy')
    //             // add error handling here!
    //         }
    //     });
    // }

    return (
        <div className="card">
            <div className="ui card">
                <div onClick={clicked} className="image">
                    <img src={gameData.image_url} />
                </div>
                <div className="content">
                    <p onClick={clicked} className="header">{gameData.title}</p>
                <button className="ui button">+ Add To My Library</button>
                </div>
            </div>
        </div>
    )
}

export default GameCard;