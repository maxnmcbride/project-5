function VideoGameCard() {

    const clicked = () =>{ console.log('clicked') }

    return ( 
        <div>
            <button onClick={clicked}>VG Card Stand In</button>
        </div>
    );
}

export default VideoGameCard;