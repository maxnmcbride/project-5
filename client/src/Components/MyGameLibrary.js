import GameCard from "./GameCard";

function MyGameLibrary({user}) {

   const userGameData = user.games && user.games.map((userGameObj) => <GameCard key={userGameObj.id} gameData={userGameObj} />)
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
        <h1>Hello this is my library Component</h1>
        {userGameData}
    </div> 
    );
}

export default MyGameLibrary;