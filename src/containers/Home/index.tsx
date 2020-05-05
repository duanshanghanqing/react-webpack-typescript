import * as React from 'react';
import * as reactMixin from 'react-mixin';
import mixins from '../../mixins';
import { Button, DatePicker } from 'antd';
import LikeButton from './LikeButton';
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
        <img src={require('../../assets/images/logo.png')} alt="" />
        <p className="title">
          {' '}
          Hello
        </p>
        <Button type="primary">Hello</Button>
        <Button>Button</Button>
        <LikeButton />
        <DatePicker />
        <video src={require('../../assets/media/movie.ogg')} controls={true}>
          您的浏览器不支持 video 标签。
        </video>
      </div>
    );
  }
}
