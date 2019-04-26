import React from 'react';

/*
何时使用 Context
Context 设计目的是为共享那些被认为对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。
例如，在下面的代码中，我们通过一个“theme”属性手动调整一个按钮组件的样式：
*/
import Header from './Header';
import { ThemeContext, themes } from './ThemeContext';


export default class extends React.Component {
  constructor(props) {
    super(props);
    // 设置初始化主题颜色
    this.state = {
      theme: themes.dark,
    };
    // 切换主题颜色
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
    // 这样写虽然能切换主题，但是 toggleTheme 方法与业务耦合的太紧，在其他组件内切换就不行了，改造看 Context2
  }

  render() {
    /*
                    React 组件允许 Consumers 订阅 context 的改变。
                    接收一个 value 属性传递给 Provider 的后代 Consumers。
                    一个 Provider 可以联系到多个 Consumers。Providers 可以被嵌套以覆盖组件树内更深层次的值。
                    */
    return (<>
      <ThemeContext.Provider value={this.state.theme}>
        <Header />
      </ThemeContext.Provider>
      <button type="button" onClick={this.toggleTheme}>修改主题颜色</button>
        </>
    );
  }
}
