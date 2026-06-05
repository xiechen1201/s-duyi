function ChildCom1(props: { name: string }) {
  return (
    <div>
      这是子组件，<div>名称：{props.name}</div>
    </div>
  );
}

export default ChildCom1;
