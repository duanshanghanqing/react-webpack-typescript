import React, { useReducer } from 'react';

const myContext = React.createContext();

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return init(action.payload);
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ContextProvider = (props) => {
  const { initialCount = 0 } = props;
  // 调用 init 方法设置 初始值
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    // 设置 state, dispatch, initialCount 参数作为 Context 值
    <myContext.Provider value={{ state, dispatch, initialCount }}>
      {props.children}
    </myContext.Provider>
  );
};

export { reducer, myContext, ContextProvider };
