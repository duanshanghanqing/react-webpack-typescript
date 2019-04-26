import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'OtherComponent',
    };
  }

  render() {
    return (
      <div>
        <h3>{ this.state.title }</h3>
      </div>
    );
  }
}
