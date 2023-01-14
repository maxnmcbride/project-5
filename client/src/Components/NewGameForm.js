import { Button, Checkbox, Form, Input, TextArea, Select } from 'semantic-ui-react'
import { useState, useEffect } from 'react';

function NewGameForm() {

    const [developer, setDeveloper] = useState("")
    const [game_description,setGame_description] = useState("")
    const [genre,setGenre] = useState("")
    const [image_url,setImage_url] = useState("")
    const [multiplayer, setMultiplayer] = useState(false)
    const [platform,setPlatform] = useState("")
    const [release_date,setRelease_date] = useState("")
    const [theme,setTheme] = useState("")
    const [title,setTitle] = useState("")

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
                response.json().then(console.log('gotta add where this is going to be used in useEffect'));
            } else {
                console.log('oh boy')
                // add error handling here!
            }
        });
    }
    // useEffect() will need to be on our video game page so that the new games will be populated upon submitting a game

    console.log(multiplayer)

    return (
        <>
            <h1>New Game Form</h1>
            <p>If you don't see the video game you are looking for in our growing public catalog please help us out by adding it! Please note that this is being input directly into our database as such, we ask that you follow naming conventions as closely as possible.</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-game-title'
                        control={Input}
                        label='Title'
                        placeholder='Title: i.e. Jak and Daxter'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Field
                        id='form-input-control-game-description'
                        control={TextArea}
                        label='Description'
                        placeholder='Description: Please copy the description written by the game developer, not your own summary. We recognize this takes a little research, and appreciate your effort in adding to our community!'
                        value={game_description}
                        onChange={(e) => setGame_description(e.target.value)}
                    />
                </Form.Group>
                <Form.Field
                    id='form-input-control-platform'
                    control={Input}
                    label='Platform'
                    placeholder='Please include all platforms i.e. PlayStation 2, PC, Xbox, etc.'
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                />
                <Form.Field
                    id='form-input-control-developer'
                    control={Input}
                    label='Developer'
                    placeholder='Developer: i.e. Naughty Dog'
                    value={developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                />
                <Form.Field
                    id='form-input-control-genre'
                    control={Input}
                    label='Genre'
                    placeholder='Genre: Action-Adventure'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <Form.Field
                    id='form-input-control-theme'
                    control={Input}
                    label='Theme'
                    placeholder='Theme: Fantasy, Alternate Historical, Comedy, etc.'
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                />
                <Form.Field
                    id='form-input-control-image_url'
                    control={Input}
                    label='Image URL'
                    placeholder='Image URL: Please Paste URL Of Game Cover'
                    value={image_url}
                    onChange={(e) => setImage_url(e.target.value)}
                />
                <Form.Field
                    id='form-input-control-release_date'
                    control={Input}
                    label='Release Date'
                    placeholder='Release Date: Month Day, Year i.e. November 6, 2000'
                    value={release_date}
                    onChange={(e) => setRelease_date(e.target.value)}
                />
                <Form.Group grouped>
                    <label>Multiplayer?</label>
                    <Form.Field
                    id='form-input-control-multiplayer' 
                    label='True' 
                    control='input' 
                    type='checkbox' 
                    value={multiplayer} 
                    onChange={() => setMultiplayer(!multiplayer)} />
                </Form.Group>
                <Form.Button type='submit'>Submit New Game</Form.Button>
            </Form>
        </>
    );
}

export default NewGameForm;


{/* checkout checkboxes in semantic UI and see about creating a new table for Platforms to 
more easly store with IDs */}