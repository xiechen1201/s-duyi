// reducer,用于计算最新的状态
import { ADD, DEL, CHANGE } from './actionType';

// 仓库默认数据
let defaultState = {
    list: [
        {
            content: '学习 React',
            status: false
        },
        {
            content: '学习 Vue',
            status: false
        },
        {
            content: '玩游戏',
            status: false
        },
        {
            content: '听歌',
            status: false
        }
    ]
};

/**
 *
 * @param {*} state 仓库对象
 * @param {*} action 描述对象 {type: 'ADD', text: 'hello'}，描述对象描述了我要干什么，以及带来的额外数据
 */
export function todoReducer(state = defaultState, action) {
    // 有了描述对象后我就可以根据旧的状态计算出新的状态并返回
    switch (action.type) {
        case ADD:
            // eslint-disable-next-line no-case-declarations
            const arrAdd = [...state.list];
            arrAdd.push({
                content: action.data,
                status: false
            });

            return { list: arrAdd };
        case CHANGE:
            // eslint-disable-next-line no-case-declarations
            let arrChange = [...state.list];
            arrChange = arrChange.map((item, index) => {
                index === action.data && (item.status = !item.status);
                return item;
            });

            return { list: arrChange };
        case DEL:
            // eslint-disable-next-line no-case-declarations
            let arrDel = [...state.list];
            arrDel = arrDel.filter((el, index) => {
                return index !== action.data;
            });

            return { list: arrDel };
        default:
            return state;
    }
}
