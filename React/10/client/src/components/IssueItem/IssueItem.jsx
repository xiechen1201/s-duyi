import React, { useEffect, useState } from 'react';
import { Tag } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getTypeList } from '../../redux/typeSlice';
import IssueItemStyle from './IssueItem.module.css';
import { formatDate } from '../../utils';
import { getUserByIdApi } from '../../api/user';

function IssueItem(props) {
    const dispatch = useDispatch();
    const { typeList } = useSelector((state) => state.type);

    const [userInfo, setUserInfo] = useState({});
    async function getUserInfo() {
        let result = await getUserByIdApi(props.issueInfo.userId);
        setUserInfo(result);
    }

    useEffect(() => {
        if (typeList.length === 0) {
            dispatch(getTypeList());
        }
        getUserInfo();
    }, []);

    const colorArr = [
        '#108ee9',
        '#2db7f5',
        '#f50',
        'green',
        '#87d068',
        'blue',
        'red',
        'purple'
    ];
    const type = typeList.find((item) => item._id === props.issueInfo.typeId) || {};

    return (
        <div className={IssueItemStyle.container}>
            <div className={IssueItemStyle.issueNum}>
                <div>{props.issueInfo.commentNumber}</div>
                <div>回答</div>
            </div>
            <div className={IssueItemStyle.issueNum}>
                <div>{props.issueInfo.scanNumber}</div>
                <div>浏览</div>
            </div>
            <div className={IssueItemStyle.issueContainer}>
                <div className={IssueItemStyle.top}>{props.issueInfo.issueTitle}</div>
                <div className={IssueItemStyle.bottom}>
                    <div className={IssueItemStyle.left}>
                        <Tag color={colorArr[typeList.indexOf(type) % colorArr.length]}>
                            {type.typeName}
                        </Tag>
                        <Tag color='volcano'>{userInfo.nickname}</Tag>
                    </div>
                    <div className={IssueItemStyle.right}>
                        <span>{formatDate(props.issueInfo.issueDate, 'year-time')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IssueItem;
