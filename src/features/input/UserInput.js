import React, { useState } from 'react'
import { onfetchInputData } from './userInputSlice'

function UserInput() {
    const initialValue = 'Initial Text!!!'
    let [userInput, setUserInput] = useState(initialValue)


    return (
        <>
            <label for="name">This text changes the UI dynamically:</label>
            <input onChange={(e) => !e.target.value
                ? setUserInput(initialValue)
                : setUserInput(e.target.value)} type="text" />
            <p>{userInput}</p>
        </>
    )
}

export default UserInput
