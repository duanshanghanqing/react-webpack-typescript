import React from 'react';
import Main from './Main';
import ContextApp from './ContextApp';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Main title="钩子函数" />
        <br />
        <br />
        <h4>useContext 最佳实践</h4>
        <ContextApp />
      </div>
    );
  }
}
