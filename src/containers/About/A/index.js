import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

@connect(
  state => ({ about: state.about }),
  { ...actions },
)
class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  setUserInfo = () => {
    this.props.setUserInfo({
      name: 'zhangshan',
      age: 18,
    });
  }

  asyncSetUserInfo = () => {
    this.props.asyncSetUserInfo({
      name: 'lisi',
      age: 20,
    });
  }

  callB = () => {
    // 通过 redux 实现跨组件方法调用，实现业务解耦
    this.props.about.B_Component.setMsg('我被A组件调用');
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.setUserInfo}>同步设置用户信息</button>
        <br />
        <br />
        <button type="button" onClick={this.asyncSetUserInfo}>异步设置用户信息</button>
        <br />
        <br />
        <button type="button" onClick={this.callB}>通过全局状态调用B组件内的方法</button>
        <br />
      </div>
    );
  }
}

export default A;
