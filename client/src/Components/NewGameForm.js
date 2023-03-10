import { Form, Input, TextArea } from 'semantic-ui-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function NewGameForm({ gameData, setGameData, setRerender}) {

    const navigate = useNavigate()
    const [developer, setDeveloper] = useState("")
    const [game_description, setGame_description] = useState("")
    const [genre, setGenre] = useState("")
    const [image_url, setImage_url] = useState("")
    const [multiplayer, setMultiplayer] = useState(false)
    const [platform, setPlatform] = useState("")
    const [release_date, setRelease_date] = useState("")
    const [theme, setTheme] = useState("")
    const [title, setTitle] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                developer,
                game_description,
                genre,
                image_url,
                multiplayer,
                platform,
                release_date,
                theme,
                title
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((newGame) => {
                    setGameData([...gameData, newGame])
                    setRerender(newGame)
                    navigate("/videogames")
                });
            } else {
                response.json().then(alert("Sorry, this game is already in our library!"))
            }
        });
    }

    return (
        <div>
            <Form id="newgameform" onSubmit={handleSubmit}>
                <p id="newgameformdescription">If you didn't see the video game you were looking for in our growing public catalog please help us out by adding it! Note: This is being input directly into our database! As such, we ask that you follow naming conventions as closely as possible.</p>
                <label className='newgamelabeltext'>Title</label>
                <Form.Field
                    id='form-input-control-game-title'
                    control={Input}
                    placeholder='Title: i.e. Jak and Daxter'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className='newgamelabeltext'>Description</label>
                <Form.Field
                    id='form-input-control-game-description'
                    control={TextArea}
                    placeholder='Description: Please copy the description written by the game developer, not your own summary. We recognize this takes a little research, and appreciate your effort in adding to our community!'
                    value={game_description}
                    onChange={(e) => setGame_description(e.target.value)}
                />
                <label className='newgamelabeltext'>Platform</label>
                <Form.Field
                    id='form-input-control-platform'
                    control={Input}
                    placeholder='Please include all platforms i.e. PlayStation 2, PC, Xbox, etc.'
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                />
                <label className='newgamelabeltext'>Developer</label>
                <Form.Field
                    id='form-input-control-developer'
                    control={Input}
                    placeholder='Developer: i.e. Naughty Dog'
                    value={developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                />
                <label className='newgamelabeltext'>Genre</label>
                <Form.Field
                    id='form-input-control-genre'
                    control={Input}
                    placeholder='Genre: Action-Adventure'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <label className='newgamelabeltext'>Theme</label>
                <Form.Field
                    id='form-input-control-theme'
                    control={Input}
                    placeholder='Theme: Fantasy, Alternate Historical, Comedy, etc.'
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                />
                <label className='newgamelabeltext'>Image URL</label>
                <Form.Field
                    id='form-input-control-image_url'
                    control={Input}
                    placeholder='Image URL: Please Paste URL Of Game Cover'
                    value={image_url}
                    onChange={(e) => setImage_url(e.target.value)}
                />
                <label className='newgamelabeltext'>Release Date</label>
                <Form.Field
                    id='form-input-control-release_date'
                    control={Input}
                    placeholder='Release Date: Month Day, Year i.e. November 6, 2000'
                    value={release_date}
                    onChange={(e) => setRelease_date(e.target.value)}
                />
                <label className='newgamelabeltext'>Multiplayer?</label>
                <Form.Group grouped>
                    <Form.Field
                        id='form-input-control-multiplayer'
                        control='input'
                        type='checkbox'
                        value={multiplayer}
                        onChange={() => setMultiplayer(!multiplayer)} />
                </Form.Group>
                <label className='newgamelabeltext'>True</label>
                <Form.Button type='submit'>Submit New Game</Form.Button>
            </Form>
        </div>
    );
}

export default NewGameForm;


{/* checkout checkboxes in semantic UI and see about creating a new table for Platforms to 
more easly store with IDs */}