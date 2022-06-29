import { useState } from 'react'

interface Prop {
    initialValue?: number
}

interface CounterState {
    counter: number;
    clicks: number
}

export const CounterBy = ( { initialValue = 15 }: Prop ) => {

    const [counterState, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })

    const { counter, clicks } = counterState

    const handleClick = ( value:number ) => {
        setCounterState( ({ counter, clicks  }) => ({
            counter: counter + value,
            clicks: clicks + 1
        }))
    }

  return (
    <>
        <h1>CounterBy: { counter }</h1>
        <h1>Click: { clicks }</h1>

        <button onClick={ () => handleClick (1) }>+1</button>
        <button onClick={ () => handleClick (5) }>+5</button>

    </>
  )
}
