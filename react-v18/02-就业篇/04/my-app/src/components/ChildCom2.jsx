import { MyContext, MyContext2 } from "../context";

function ChildCom2() {
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
                        <MyContext2.Consumer>
                            {(context) => <div>{context.name}</div>}
                        </MyContext2.Consumer>
                    </>
                );
            }}
        </MyContext.Consumer>
    );
}

export default ChildCom2;
