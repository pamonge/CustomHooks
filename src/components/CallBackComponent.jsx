import React, { useCallback, useState } from 'react'
import IncrementComponent from './IncrementComponent'

export const CallBackComponent = () => {

  const [ counter, setCounter] = useState(0)

  const incrementParent = useCallback(
    (val) => {
    setCounter(count => count + val)
    },
    []
  )

  return (
    <>
      <h1>Contador {counter}</h1>
      <IncrementComponent increment={incrementParent} />
    </>
    
  )
}
