import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RegisterStepState {
    step: number
    email: string
}

const initialState: RegisterStepState = {
    step: 1,
    email: '',
}

export const registerStepSlice = createSlice({
    name: 'registerStep',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        },
        backStep: (state) => {
            state.step -= 1
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
    }
})

export const { setStep, backStep, setEmail } = registerStepSlice.actions

export default registerStepSlice.reducer