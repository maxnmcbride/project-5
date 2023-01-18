// import { useState } from "react"

function GameCardLibrary({ gameData, user }) {

    const clicked = () => { console.log('clicked') }
    // const clicked2 = () => { console.log('button') }
    // console.log(gameData)

    // const [game_id, setGameId] = useState("")


    return (
        <div className="card">
            <div className="ui card">
                <div onClick={clicked} className="image">
                    <img src={gameData.image_url} alt={gameData.title}/>
                </div>
                <div className="content">
                    <p onClick={clicked} className="header">{gameData.title}</p>
                    <button className="ui button">- Remove From My Library</button>
                </div>
            </div>
        </div>
    )
}

export default GameCardLibrary;