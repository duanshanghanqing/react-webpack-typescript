import React, { useState, useEffect } from 'react';

// 但是什么是钩子（Hook）？
// 钩子是为了让你抛弃类使用React的，所以它不能在类中运行

// 通过 props 接收组件属性
export default (props) => {
  // 声明一个名为“count”的新状态变量
  // useState是一个钩子（Hook）,在一个函数式组件中调用它，为这个组件增加一些内部的状态。[增加状态]
  // React将会在下一次渲染前保存此状态。
  // useState返回一对值：当前的状态（state value）[状态名称]和一个可以更新状态的函数[状态函数]。
  const [count, setCount] = useState(0);// useState唯一的参数就是初始状态（initial state）

  /*
  // 声明多个状态变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  */

  // 类似于 componentDidMount 和 componentDidUpdate:
  // 当你调用useEffect,就是告诉React在刷新DOM之后运行你的副作用函数。
  // 副作用函数在组件中声明，所以可以使用组件的状态（state）和属性（props）。
  // React默认在每一次渲染后运行副作用函数——包括第一次渲染。
  useEffect(() => {
    // 使用浏览器API更新文档标题
    document.title = `你点击了 ${count} 次`;
    console.log(props);
    // 当组件被卸载时，React会在由随后的渲染引起的副作用函数运行之前调用，初始化不执行
    return () => {
      console.log('取消订阅');
    };
  });


  /*
  // https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(() => {
      // 订阅
      const subscription = props.source.subscribe();
      return () => {
        // 取消订阅
        subscription.unsubscribe();
      };
    },
    // 现在，只有在props.source更改时才能重新创建订阅。
    [props.source],
  );
  */

  return (
    <div>
      <p>
你点击了
        {count}
次
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
