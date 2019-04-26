import React from 'react';
import { ThemeContext, UserContext } from '../../ThemeContext';

// 无状态写法
export default props => (
  /*
    一个可以订阅 context 变化的 React 组件。
    */
  <>
    <ThemeContext.Consumer>
      {context => (
        // 把 Context 它作为一个 props 传递，然后像通常使用 props 一样去使用它
        <h1
          style={{ background: context.theme.background, color: context.theme.color }}
          theme={context.theme}
        >
          {props.children}
        </h1>
      )}
    </ThemeContext.Consumer>
    <UserContext.Consumer>
      {context => <h1>{ context.userInfo.name }</h1>}
    </UserContext.Consumer>
  </>
);

/*
每当Provider的值发生改变时, 作为Provider后代的所有Consumers都会重新渲染。
从Provider到其后代的Consumers传播不受shouldComponentUpdate方法的约束，因此即使祖先组件退出更新时，后代Consumer也会被更新
*/
