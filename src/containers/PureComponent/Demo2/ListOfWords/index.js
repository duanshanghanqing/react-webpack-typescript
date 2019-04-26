import React from 'react';

// 继承PureComponent时，进行的是浅比较，也就是说，如果是引用类型的数据，只会比较是不是同一个地址，而不会比较具体这个地址存的数据是否完全一致
export default class extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}
