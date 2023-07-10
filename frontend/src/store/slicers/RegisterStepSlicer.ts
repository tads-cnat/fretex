import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RegisterStepState {
    step: number,
    email: string,
    role: "cliente" | "freteiro", 
}

const initialState: RegisterStepState = {
    step: 1,
    email: '',
    role: "cliente"
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
        setRole: (state, action: PayloadAction<"cliente" | "freteiro">) => {
            state.role = action.payload
        }
    }
})

export const { setStep, backStep, setEmail, setRole } = registerStepSlice.actions

export default registerStepSlice.reducer