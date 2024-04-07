function Money(props) {
  function onChangeInput(event) {
    // 将用户输入的值传递给父组件，让父组件进行更新
    props.transform(event.target.value);
  }

  return (
    <fieldset>
      <legend>{props.text}</legend>
      <input type='text' value={props.money} onChange={onChangeInput} />
    </fieldset>
  );
}

export default Money;
