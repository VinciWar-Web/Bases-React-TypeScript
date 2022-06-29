import { Counter } from "./bases/Counter";
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from "./bases/CounterEffect";
import { CounterReducerComponent } from "./counter-reducer/CounterReducer";
// import { CounterReducerComponent } from './bases/CounterReducer';

function App() {
  return (
    <>
      < Counter initialValue={ 5 } />
      <hr />

      <CounterBy />
      <hr />

      <CounterEffect />
      <hr />

      <CounterReducerComponent />
      <hr />
    </>
  );
}

export default App;
