import { forwardRef, useImperativeHandle } from "react";

export interface ChildCompRef {
  submit: () => void;
}

const ChildComp = forwardRef<ChildCompRef>((_props, ref) => {
  useImperativeHandle(ref, () => ({
    submit() {
      console.log("submit");
    }
  }));

  return <div>111</div>;
});

export default ChildComp;
