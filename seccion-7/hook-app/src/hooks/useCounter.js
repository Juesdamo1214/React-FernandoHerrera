import { useState } from "react"


export const useCounter = (initalValue = 10) => {

  const [counter, setCounter] = useState(initalValue)

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(counter = useState(initalValue));
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
