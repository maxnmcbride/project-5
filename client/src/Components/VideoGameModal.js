
function VideoGameModal({gameData}) {
    
    console.log("vg modal:", gameData)

    const mappedGameData = gameData.map((gameObj)=>{
        return(
            gameObj.title
        )
    })

    console.log(mappedGameData)

    return ( 
        <div className="modal" id="modal">
        </div>
     );
}

export default VideoGameModal;