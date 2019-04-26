import React from 'react';
import { ContextProvider } from './reducer';
import Counter from './Counter';
import CounterTest from './CounterTest';

export default () => (
  <div className="ContextApp">
    {/* 定义初始参数 */}
    <ContextProvider initialCount={10}>
      <Counter />
      <CounterTest />
    </ContextProvider>
  </div>
);
