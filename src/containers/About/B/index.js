import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

@connect(
  state => ({ about: state.about }),
  { ...actions },
)
class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '我被自己调用',
    };
  }

  componentDidMount() {
    // 把B组件挂载到全局数据状态中
    this.props.setBComponent(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.about.userInfo) {
      this.userInfoUpdate();
    }
  }

  userInfoUpdate = () => {
    console.log('userInfo被更新');
  }

  setMsg = (msg) => {
    this.setState({
      msg,
    });
  }

  render() {
    return (
      <div>
        <h2>{ this.state.msg }</h2>
        { this.props.about.userInfo.name }
      </div>
    );
  }
}

export default B;
