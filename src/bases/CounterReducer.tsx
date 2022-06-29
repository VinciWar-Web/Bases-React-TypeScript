import { useReducer } from 'react'

interface counterState {
  counter : number;
  previous: number;
  changes : number;
}

const INITIAL_STATE: counterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

type CounterAction = 
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' };

const counterReducer = ( state:counterState, action:CounterAction ): counterState => {

  switch (action.type) {
    case 'reset':
      return{
        counter: 0,
        previous: 0,
        changes: 0,
      }
    case 'increaseBy':
      return{
        counter: state.changes + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
  
    default:
      return state
  }

}

export const CounterReducerComponent = ( ) => {

  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const { counter, previous, changes } = state

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  const handleIncreaseBy = ( value:number ) => {
    dispatch({ type: 'increaseBy', payload: { value: value } })
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
