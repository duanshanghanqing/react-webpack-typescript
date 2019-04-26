import React from 'react';
import { ThemeContext } from '../../ThemeContext';

// 有状态写法
/*
export default class extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <h1 style={{ background: context.background, color: context.color }}>
            {this.props.children}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}
*/

// 无状态写法
export default props => (
  /*
    一个可以订阅 context 变化的 React 组件。
    */
  <ThemeContext.Consumer>
    {context => (
      <h1 style={{ background: context.background, color: context.color }}>
        {props.children}
      </h1>
    )}
  </ThemeContext.Consumer>
);

/*
每当Provider的值发生改变时, 作为Provider后代的所有Consumers都会重新渲染。
从Provider到其后代的Consumers传播不受shouldComponentUpdate方法的约束，因此即使祖先组件退出更新时，后代Consumer也会被更新
*/
