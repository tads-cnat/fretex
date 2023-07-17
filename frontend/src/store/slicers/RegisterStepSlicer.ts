import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IfreteiroRegData } from '../../interfaces'

export interface RegisterStepState {
    step: number,
    email: string,
    role: "cliente" | "freteiro", 
    freteiro?: IfreteiroRegData,
    freteiroStep: number
}

const initialState: RegisterStepState = {
    step: 1,
    email: '',
    role: "cliente",
    freteiroStep: 1,
    freteiro: {
        email: '',
        url_foto: '',
        full_name: '',
        cpf: '',
        password: '',
        confirmPassword: '',
    }
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
        backFreteiroStep: (state) => {
            state.freteiroStep -= 1
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setRole: (state, action: PayloadAction<"cliente" | "freteiro">) => {
            state.role = action.payload
        },
        setFreteiro: (state, action: PayloadAction<IfreteiroRegData>) => {
            state.freteiro = action.payload
        },
        setFreteiroStep( state, action: PayloadAction<number>){
            state.freteiroStep = action.payload
        },
        clearRedux(state){
            state.step = 1
            state.email = ''
            state.role = "cliente"
            state.freteiroStep = 1
            state.freteiro = {
                email: '',
                url_foto: '',
                full_name: '',
                cpf: '',
                password: '',
                confirmPassword: '',
            }
        }
    }
})

export const { setStep, backStep, setEmail, setRole, setFreteiro, setFreteiroStep, backFreteiroStep, clearRedux } = registerStepSlice.actions

export default registerStepSlice.reducer