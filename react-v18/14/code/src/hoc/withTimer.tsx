import type { ComponentType } from "react";
import { useState, useEffect } from "react";

function withTimer<T extends object>(Component: ComponentType<T>) {
  return function (props: T) {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
      const timer = setInterval(() => {
        console.log(counter);
        setCounter(counter + 1);
      }, 1000);

      return function () {
        clearInterval(timer);
      };
    }, [counter]);

    return (
      <>
        <Component {...props} />
      </>
    );
  };
}

export default withTimer;
