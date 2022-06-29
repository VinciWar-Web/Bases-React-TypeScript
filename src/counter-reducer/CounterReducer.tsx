import { useReducer } from 'react'
import { doIncreaseBy, doReset } from './actions/actions'
import { counterState } from './interfaces/interfaces'
import { counterReducer } from './reducers/counterReducer'



const INITIAL_STATE: counterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}


export const CounterReducerComponent = ( ) => {

  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const { counter, previous, changes } = state

  const handleReset = () => {
    dispatch( doReset() )
  }

  const handleIncreaseBy = ( value:number ) => {
    dispatch( doIncreaseBy( value ) )
  }

  return (
    <>
        <h1>Counter Reducer</h1>
        <div style={{background: '#fff'}}>
          <p style={{color: 'green'}}>Contador: { counter }</p>
          <p style={{color: 'orange'}}>Valor anterior: { previous }</p>
          <p style={{color: 'blue'}}>Cambios: { changes }</p>
        </div>

        <button onClick={ () => handleIncreaseBy(1) }>+1</button>
        <button onClick={ () => handleIncreaseBy(5) }>+5</button>
        <button onClick={ () => handleIncreaseBy(10) }>+10</button>
        <button onClick={ handleReset }>Reset</button>
    </>
  )
}
