import React from "react";
import PropTypes from "prop-types";

function ChildCom(props) {
    return (
        <div>
            这是子组件
            <span>
                姓名：{props.name} 年龄：{props.age}
            </span>
        </div>
    );
}

ChildCom.propTypes = {
    // name: PropTypes.string,
    age: PropTypes.number,
    name: function (props, propName, componentName) {
        console.log(props, propName, componentName);
        /* if (!/-stu/.test(props[propName])) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        } */
    }
};

export default ChildCom;
