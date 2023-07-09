import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RegisterStepState {
    step: number
}

const initialState: RegisterStepState = {
    step: 1,
}

export const registerStepSlice = createSlice({
    name: 'registerStep',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        }
    }
})

export const { setStep } = registerStepSlice.actions

export default registerStepSlice.reducer