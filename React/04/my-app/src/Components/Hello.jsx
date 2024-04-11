import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <ul>
        <li>类组件</li>
        <li>姓名: {this.props.stuInfo.name}</li>
        <li>年龄: {this.props.stuInfo.age}</li>
        <div onClick={() => this.props.changeState('Hello str')}>触发更新</div>
      </ul>
    );
  }
}

Hello.propTypes = {
  stuInfo: PropTypes.object
};

Hello.defaultProps = {
  stuInfo: {
    name: 'default vaule',
    age: 0
  }
};

export default Hello;
