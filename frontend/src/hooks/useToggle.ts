import { useState } from "react"

interface IToggle {
  value: boolean;
  toggle: () => void;
  setAsFalse: () => void;
  setAsTrue: () => void;
}

export const useToggle = (initialValue = false): IToggle => {
  const [value, setValue] = useState(initialValue)

  const toggle = (): void => { setValue(!value); }
  const setAsTrue = (): void => { setValue(true); }
  const setAsFalse = (): void => { setValue(false); }

  return {
    value,
    toggle,
    setAsFalse,
    setAsTrue
  }
}
