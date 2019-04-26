import React from 'react';
// React.Component 组件下的方法
class Demonstration extends React.Component {
  // 装载:
  constructor(props) {
    super(props);
    console.log('装载-[constructor(props)]-1');
    this.state = {
      Title: '',
      list: [],
    };
  }

  // 装载:
  // 组件实例化后和接受新属性或属性发生变化时将会调用getDerivedStateFromProps。它应该返回一个对象来更新状态，或者返回null来表明新属性不需要更新任何状态
  // 更新:
  // 调用 this.setState() 会触发该方法,
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('装载-[static getDerivedStateFromProps(nextProps, prevState)]-2');
    console.log('更新-[static getDerivedStateFromProps(nextProps, prevState)]-5');
    console.log(nextProps, prevState);
    // 观察 Title 属性的变化，来跟新内部状态
    if (nextProps.title !== prevState.Title) {
      return {
        Title: nextProps.title,
      };
    }
    return null;
  }

  // 装载:
  // componentDidMount()紧跟在组件装载后（被插入树中）调用。可以立即调用setState()
  componentDidMount() {
    console.log('装载-[componentDidMount()]-4');
    this.setState({
      list: ['react', 'vue', 'ng'],
    });
  }

  // 更新:
  // 比较即将下一下要更新的 state 和 当前 state 是否相同，相同就不更新视图，不相同更新，从而提升性能
  shouldComponentUpdate(nextProps, nextState) {
    console.log('更新-[static shouldComponentUpdate(nextProps, nextState)]-6');
    console.log(nextProps, nextState, this.state);
    // 这里知识方便比较，应该用不可变数据结构
    if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
      return false;
    }
    return true;
  }

  // 更新:
  // 在最新的渲染输出提交给DOM前 将 会立即调用。它让你的组件能在当前的值可能要改变前获得它们。这一生命周期返回的任何值将会 作为参数被传递给componentDidUpdate()。
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('更新-[getSnapshotBeforeUpdate(prevProps, prevState)]-8');
    console.log(prevProps, prevState);
    return 1;
  }

  // 更新:
  // 紧跟在更新发生后调用。对于初次的渲染，该方法并不会调用。
  // 若shouldComponentUpdate()返回false，componentDidUpdate()将不会被调用。
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('更新-[componentDidUpdate(prevProps, prevState, snapshot)]-9');
    // snapshot: 为 getSnapshotBeforeUpdate() 方法返回的值
    console.log(prevProps, prevState, snapshot);

    // 可以调用 setState(), 须把它包裹在一个条件中,
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
  }

  // 装载:
  // 更新:
  render() {
    console.log('装载-[render()]-3');
    console.log('装载-[render()]-7');
    return (
      <div>
        {this.state.Title}
        <ul>
          {
            this.state.list.map(item => <li key={item}>{item}</li>)
          }
        </ul>
      </div>
    );
  }

  // 卸载
  // 当一个组件被从DOM中移除时，该方法被调用：
  componentWillUnmount() {
    console.log('卸载-[componentWillUnmount()]-10');
  }
}

// efaultProps可以被定义为在组件类本身上的一个属性，为该类设置默认属性
Demonstration.defaultProps = {
  color: 'blue',
};

export default Demonstration;


/*
ReactDOM 下的方法
      render()： 渲染一个React元素成为DOM，放到所提供的container里。并且返回这个组件的一个 引用 (或者对于无状态组件返回null)。
      ReactDOM.hydrate(element, container[, callback]): 如果你要进行服务端渲染，
          请使用ReactDOM.hydrate方法替换ReactDOM.render， 客户端的渲染请保持使用ReactDOM.render方法。
      ReactDOM.unmountComponentAtNode(container): 从DOM元素中移除已挂载的React组件，清除它的事件处理器和state。
          如果容器内没有挂载任何组件，这个函数什么都不会干。 有组件被卸载的时候返回true，没有组件可供卸载时返回 false。
      ReactDOM.findDOMNode(component)：如果这个组件已经被挂载到DOM中，函数会返回对应的浏览器中生成的DOM元素 。不提倡使用
      ReactDOM.createPortal(child, container) 把当前组件包裹的html内容渲染到指定dom节点内
      https://codepen.io/gaearon/pen/yzMaBd
      render() {
        // React does *not* create a new div. It renders the children into `domNode`.
        // `domNode` is any valid DOM node, regardless of its location in the DOM.
        return ReactDOM.createPortal(
          this.props.children,
          domNode,
        );
      }
ReactDOMServer [服务端渲染的方法]
      ReactDOMServer.renderToString(element)： 把 dom 字符串安流的方式输出到前端
          参考  https://github.com/duanshanghanqing/react-ssr/blob/master/react-ssr-14/src/server/root.js 58行代码
      ReactDOMServer.renderToStaticMarkup(element): 类似 renderToString，但是不会创建额外的DOM属性，
          例如 data-reactid 这些仅在React内部使用的属性。如果你希望把React当作一个简单的静态页面生成器来使用，
          这很有用，因为去掉额外的属性可以节省很多字节。
*/
