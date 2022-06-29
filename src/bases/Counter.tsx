import { useState } from 'react'

interface Prop {
    initialValue: number
}

export const Counter = ( { initialValue }: Prop ) => {

    const [counter, setCounter] = useState(initialValue)

    const handleClick = () => {
        setCounter( counter + 1 )
    }

  return (
    <>
        <h1>Counter useState: { counter }</h1>
        <button onClick={ handleClick }>+1</button>
    </>
  )
}
