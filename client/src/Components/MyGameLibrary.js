import GameCardLibrary from "./GameCardLibrary";

function MyGameLibrary({ user, removeGameFromFavorites }) {

    const userGameData = user.games && user.games.map((userGameObj) => <GameCardLibrary removeGameFromFavorites={removeGameFromFavorites} key={userGameObj.id} gameData={userGameObj} />)
    //    const potato = userGameData && "meow"
    //    This is a shorthand for if/then statement i.e. if userGameData
    //    if (userGameData){
    //    This is working because the useEffect in amp is finally firing off
    //     userGameData.map((userGameObj) => {console.log(userGameObj)})
    //    }
    //    console.log(userGameData)

    // 
    return (
        <div>
            {userGameData}
        </div>
    );
}

export default MyGameLibrary;