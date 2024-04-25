import React from 'react';
import { Avatar } from 'antd';
import ScoreRankItemStyle from './ScoreRankItem.module.css';

function ScoreRankItem(props) {
    let rankNum = null;
    switch (props.rankIndex) {
        case 1:
            rankNum = (
                <div
                    className='iconfont icon-jiangbei'
                    style={{ color: '#ffda23' }}></div>
            );
            break;
        case 2:
            rankNum = (
                <div
                    className='iconfont icon-jiangbei'
                    style={{ color: '#c5c5c5' }}></div>
            );
            break;
        case 3:
            rankNum = (
                <div
                    className='iconfont icon-jiangbei'
                    style={{ color: '#cd9a62' }}></div>
            );
            break;
        default:
            rankNum = <span>{props.rankIndex}</span>;
            break;
    }

    return (
        <div className={ScoreRankItemStyle.container}>
            {/* 名次、头像、积分 */}
            <div className={ScoreRankItemStyle.left}>
                {rankNum}
                <div className={ScoreRankItemStyle.avatar}>
                    <Avatar size='small' src={'/img' + props.rankInfo.avatar} />
                </div>
                <div className={ScoreRankItemStyle.nickname}>
                    {props.rankInfo.nickname}
                </div>
            </div>
            {/* 积分 */}
            <div className={ScoreRankItemStyle.right}>{props.rankInfo.points}</div>
        </div>
    );
}

export default ScoreRankItem;
