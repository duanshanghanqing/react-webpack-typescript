/*
React.Component 与 React.PureComponent（React之性能优化）

前言 先说说 shouldComponentUpdate
提起React.PureComponent，我们还要从一个生命周期函数 shouldComponentUpdate 说起，从函数名字我们就能看出来，这个函数是用来控制组件是否应该被更新的。
简单来说，这个生命周期函数返回一个布尔值，如果返回true，那么当props或state改变的时候进行更新；
如果返回false，当props或state改变的时候不更新，默认返回true。
（这里的更新不更新，其实说的是执不执行render函数，如果不执行render函数，那自然该组件和其子组件都不会重新渲染啦）

重写shouldComponentUpdate可以提升性能，它是在重新渲染过程开始前触发的。当你明确知道组件不需要更新的时候，在该生命周期内返回false就行啦！
*/

import React from 'react';
import ListOfWords from './ListOfWords';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar'],
    };
  }

  handleClick = () => {
    // This section is bad style and causes a bug
    const { words } = this.state;
    words.push('marklar');
    this.setState({ words });
  }

  render() {
    // 下面代码中，无论你怎么点击按钮，ListOfWords渲染的结果始终没变化，原因就是WordAdder的word的引用地址始终是同一个。
    return (
      <div>
        <button type="button" onClick={this.handleClick}>click</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
