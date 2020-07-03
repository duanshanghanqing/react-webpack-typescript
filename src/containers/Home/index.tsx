import React from 'react';
import reactMixin from 'react-mixin';
import mixins from '../../mixins';
import UseState from './UseState';
import UseEffect from './UseEffect';
import MousePosition from './MousePosition';
import URLLoader from './URLLoader';
import UseRef from './UseRef';
import UseContext from './UseContext';
import './index.less';
import './index.css';

// 在使用 require 语法前增加一个声明“declare const require: any”。
declare const require: any;

@reactMixin.decorate(mixins)
export default class extends React.Component<{
  name: string,
  $http: any
}, {
  isChecked: boolean
}> {
  componentDidMount() {
    console.log(this.props.name);
    this.props.$http.get('/pcapi/v2/dictionary/timezone').then((data) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className="Home">
        <UseState />
        <br /><br />
        <UseEffect />
        <br /><br />
        <MousePosition />
        <br />
        <URLLoader />
        <br />
        <UseRef />
        <br />
        <UseContext />
      </div>
    );
  }
}
