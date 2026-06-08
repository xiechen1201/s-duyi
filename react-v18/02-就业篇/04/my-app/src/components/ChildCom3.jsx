import { MyContext } from "../context";

function ChildCom3() {
    return (
        // 读取上下文数据
        <MyContext.Consumer>
            {(context) => {
                return (
                    <>
                        <div>{context.counter}</div>
                        <button
                            onClick={() =>
                                context.setCounter(context.counter + 1)
                            }>
                            新增
                        </button>
                    </>
                );
            }}
        </MyContext.Consumer>
    );
}

export default ChildCom3;
