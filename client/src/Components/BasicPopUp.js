function BasicPopUp({ setBasicPopUp }) {

    const closePopUp = () => {
        setBasicPopUp(false)
    };

    return (
        <div id="overlay">
            <div id='popup-container'>
                <h3>wassup?</h3>
                <div id='content-container'>
                    <button onClick={closePopUp}>X</button>
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    );
}

export default BasicPopUp;