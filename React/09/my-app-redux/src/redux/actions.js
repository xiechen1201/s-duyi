// 生产 action 对象的函数，一般称为 actionCreator

import { ADD, CHANGE, DEL } from './actionType';

const addListAction = (newItem) => ({
    type: ADD,
    data: newItem
});

const changeListItemAction = (data) => ({
    type: CHANGE,
    data
});

const delListItemAction = (data) => ({
    type: DEL,
    data
});

export { addListAction, delListItemAction, changeListItemAction };
