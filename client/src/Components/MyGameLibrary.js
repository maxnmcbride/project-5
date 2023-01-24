import GameCardLibrary from "./GameCardLibrary";

function MyGameLibrary({ user, removeGameFromFavorites }) {
    
    const userGameData = user.games && user.games.map((userGameObj) => <GameCardLibrary removeGameFromFavorites={removeGameFromFavorites} key={userGameObj.id} gameData={userGameObj} />)
    //    const potato = userGameData && "meow"
    //    This is a shorthand for if/then statement i.e. if userGameData
    //    if (userGameData){
    //    This is working because the useEffect in app is finally firing off
    //     userGameData.map((userGameObj) => {console.log(userGameObj)})
    //    }
    //    console.log(userGameData) 
    return (
        <div id="card_container_userpage">
            {userGameData}
        </div>
    );
}

export default MyGameLibrary;