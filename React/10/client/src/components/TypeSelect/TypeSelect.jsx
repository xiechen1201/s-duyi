import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTypeList, updateIssueTypeId } from '../../redux/typeSlice';

import { Tag } from 'antd';

function TypeSelect(props) {
    let dispatch = useDispatch();
    let { typeList } = useSelector((state) => state.type);

    let [tagContainer, setTagContainer] = useState([]);

    useEffect(() => {
        if (!typeList.length) {
            dispatch(getTypeList());
        }
        if (typeList.length) {
            let TagsDOM = [];
            let colorArr = [
                '#108ee9',
                '#2db7f5',
                '#f50',
                'green',
                '#87d068',
                'blue',
                'red',
                'purple'
            ];

            TagsDOM = typeList.map((el, index) => {
                return (
                    <Tag
                        color={colorArr[index % colorArr.length]}
                        key={el._id}
                        value={el._id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => onClickTag(el._id)}>
                        {el.typeName}
                    </Tag>
                );
            });
            TagsDOM.unshift(
                <Tag
                    color='magenta'
                    key='all'
                    value='all'
                    style={{ cursor: 'pointer' }}
                    onClick={() => onClickTag('all')}>
                    全部
                </Tag>
            );

            setTagContainer(TagsDOM);
        }
    }, [typeList]);

    function onClickTag(id) {
        // 更新 redux 中的 typeId
        if (window.location.pathname === '/issues') {
            // 问答页面
            dispatch(updateIssueTypeId(id));
        } else if (window.location.pathname === '/book') {
        }
    }

    return <>{tagContainer}</>;
}

export default TypeSelect;
