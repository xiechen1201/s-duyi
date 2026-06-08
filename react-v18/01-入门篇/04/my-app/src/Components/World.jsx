import PropTypes from 'prop-types';

function World(props) {
  return (
    <ul>
      <li>函数组件</li>
      <li>姓名: {props.stuInfo.name}</li>
      <li>年龄: {props.stuInfo.age}</li>
    </ul>
  );
}

World.propTypes = {
  stuInfo: PropTypes.object
};

World.defaultProps = {
  stuInfo: {
    name: 'default vaule',
    age: 0
  }
};

export default World;
