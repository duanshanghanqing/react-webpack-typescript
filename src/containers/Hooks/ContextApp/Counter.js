import React, { useContext } from 'react';
import { myContext } from './reducer';

function Counter() {
  const { state, dispatch, initialCount } = useContext(myContext);
  return (
    <div>
      Counter Count:
      {' '}
      {state.count}
      {' '}
      <button type="button" onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button>
      {' '}
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>+</button>
      {' '}
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
      {' '}
    </div>
  );
}

export default Counter;
