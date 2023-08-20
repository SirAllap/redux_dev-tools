import { createSlice } from '@reduxjs/toolkit'

const initialValue = ''

export const userInputSlice = createSlice({
    name: 'useInput',
    initialValue,
    reducers: {
        show: (state, action) => {
            state = action.payload
        }
    }
})