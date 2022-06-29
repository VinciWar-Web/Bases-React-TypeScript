import { CounterAction } from "../actions/actions"
import { counterState } from "../interfaces/interfaces"

export const counterReducer = ( state:counterState, action:CounterAction ): counterState => {

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
  