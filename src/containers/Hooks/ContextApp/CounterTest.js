import React, { useContext } from 'react';
import { myContext } from './reducer';

function CounterTest() {
  // 取出在 myContext.Provider 设置的Context value 值
  const { state, dispatch, initialCount } = useContext(myContext);
  return (
    <div>
      CounterTest Count:
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

export default CounterTest;
