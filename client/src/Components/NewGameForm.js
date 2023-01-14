import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

// complete options

const platformOptions = [
    { key: 'p', text: 'PlayStation', value: 'PlayStation' },
    { key: 'p1', text: 'PlayStation 1', value: 'PlayStation 1' },
    { key: 'p2', text: 'PlayStation 2', value: 'PlayStation 2' },
    { key: 'p3', text: 'PlayStation 3', value: 'PlayStation 3' },
    { key: 'p4', text: 'PlayStation 4', value: 'PlayStation 4' },
    { key: 'p5', text: 'PlayStation 5', value: 'PlayStation 5' },
    { key: 'psp', text: 'PlayStation Portable', value: 'PlayStation Portable' },
    { key: 'xb', text: 'Xbox', value: 'Xbox' },
    { key: 'xb360', text: 'Xbox 360', value: 'Xbox 360' },
    { key: 'xbOne', text: 'Xbox One', value: 'Xbox One' },
    { key: 'xbx', text: 'Xbox Series X', value: 'Xbox Series X' },
    { key: 'o', text: 'Other', value: 'other' },
]
//   look up these keys and value what they mean, and how to get them to correlate with my backend

function NewGameForm() {
    return (
        <>
        <h1>New Game Form</h1>
        <p></p>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-game-title'
                        control={Input}
                        label='Title'
                        placeholder='Title'
                    />
                    <Form.Field
                        id='form-input-control-game-description'
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                    />
                    <Form.Field
                        control={Select}
                        options={platformOptions}
                        label={{ children: 'Platform', htmlFor: 'form-select-control-platform' }}
                        placeholder='Platform'
                        search
                        searchInput={{ id: 'form-select-control-platform' }}
                    />
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Opinion'
                    placeholder='Opinion'
                />
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='joe@schmoe.com'
                    error={{
                        content: 'Please enter a valid email address',
                        pointing: 'below',
                    }}
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirm'
                    label='Label with htmlFor'
                />
            </Form>
        </>
    );
}

export default NewGameForm;