import React, { useState } from 'react';
import { addListAction } from '../redux/actions';

function Input(props) {
    const [value, setValue] = useState('');

    function onClickBtn() {
        if (!value) {
            return false;
        }

        // 将用户填写的内容提交到仓库
        // dispatch 会派发一个 action 对象到 reducer 里面
        // addListAction(value) 返回一个 {type: "ADD", value: "value"}
        props.store.dispatch(addListAction(value));
        setValue('');
    }

    return (
        <div>
            <input
                type='text'
                className='form-control'
                placeholder='请输入内容'
                style={{ marginRight: '10px' }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className='btn btn-primary' onClick={onClickBtn}>
                提交
            </button>
        </div>
    );
}

export default Input;
