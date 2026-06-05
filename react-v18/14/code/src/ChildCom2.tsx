function ChildCom2(props: { age: number }) {
  return (
    <div>
      这是子组件，<div>年龄：{props.age}</div>
    </div>
  );
}

export default ChildCom2;
