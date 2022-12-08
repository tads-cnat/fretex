import { useState } from "react"

export const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue)

    const toggle = () => setValue(!value)
    const setAsTrue = () => setValue(true)
    const setAsFalse = () => setValue(false)

    return {
        value,
        toggle,
        setAsFalse,
        setAsTrue
    }
}