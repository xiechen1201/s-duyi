import React from 'react';
import { delListItemAction, changeListItemAction } from '../redux/actions';

function List(props) {
    const list = props.store.getState().list;

    function onClickItem(index) {
        props.store.dispatch(changeListItemAction(index));
    }

    function onClickDel(event, index) {
        event.stopPropagation()
        props.store.dispatch(delListItemAction(index));
    }

    const lis = list.map((el, index) => {
        return (
            <li
                key={index}
                className={['text-primary', 'item', el.status ? 'completed' : ''].join(
                    ' '
                )}
                onClick={onClickItem.bind(this, index)}>
                <span>{el.content}</span>
                <button
                    type='button'
                    className='close'
                    onClick={(event) => onClickDel(event, index)}>
                    &times;
                </button>
            </li>
        );
    });

    return (
        <div>
            <ul style={{ marginTop: '20px' }}>{lis}</ul>
        </div>
    );
}

export default List;
