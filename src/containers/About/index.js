import React from 'react';
import reactMixin from 'react-mixin';
import mixins from '../../mixins';
import A from './A';
import B from './B';

@reactMixin.decorate(mixins)
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test',
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.state.name}
        <h5>A组件</h5>
        <A />
        <h5>B组件</h5>
        <B />
      </div>
    );
  }
}

export default About;
