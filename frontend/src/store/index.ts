import { configureStore } from '@reduxjs/toolkit'
import registerStepReducer from './slicers/RegisterStepSlicer'

export const store = configureStore({
    reducer: {
        registerStep: registerStepReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


